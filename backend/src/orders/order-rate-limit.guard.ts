import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import type { Request } from 'express';

/**
 * Minimal in-memory rate limiter for the public POST /orders endpoint.
 *
 * POST /orders is unauthenticated and sends an email through the business's
 * SMTP account, so without a limit a script could drain the mail quota (which
 * would also break admin password-reset mail) and fill the orders table.
 *
 * Deliberately dependency-free. If the app is ever run behind a load balancer
 * or on multiple instances, replace this with @nestjs/throttler backed by Redis.
 */
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_ORDERS_PER_WINDOW = 5;
const SWEEP_EVERY_MS = 10 * 60 * 1000;

@Injectable()
export class OrderRateLimitGuard implements CanActivate {
  private readonly hits = new Map<string, number[]>();
  private lastSweep = Date.now();

  private clientKey(request: Request): string {
    const forwarded = request.headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.trim()) {
      return forwarded.split(',')[0].trim();
    }
    return request.ip ?? request.socket?.remoteAddress ?? 'unknown';
  }

  /** Drop entries that have fully aged out so the map cannot grow forever. */
  private sweep(now: number) {
    if (now - this.lastSweep < SWEEP_EVERY_MS) return;
    this.lastSweep = now;
    for (const [key, timestamps] of this.hits) {
      const fresh = timestamps.filter((time) => now - time < WINDOW_MS);
      if (fresh.length === 0) this.hits.delete(key);
      else this.hits.set(key, fresh);
    }
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const now = Date.now();

    this.sweep(now);

    const key = this.clientKey(request);
    const recent = (this.hits.get(key) ?? []).filter(
      (time) => now - time < WINDOW_MS,
    );

    if (recent.length >= MAX_ORDERS_PER_WINDOW) {
      throw new HttpException(
        'Too many orders submitted from this device. Please try again later or call us to complete your order.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    recent.push(now);
    this.hits.set(key, recent);
    return true;
  }
}
