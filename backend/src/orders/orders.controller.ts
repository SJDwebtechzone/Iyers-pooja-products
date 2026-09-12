import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import type { CreateOrderDto } from './orders.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OrderRateLimitGuard } from './order-rate-limit.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  /** Public — customer submits the Order Now flow. Rate limited per IP. */
  @UseGuards(OrderRateLimitGuard)
  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.service.create(dto);
  }

  /** Admin-only — dashboard order list. */
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.service.findAll();
  }

  /**
   * Admin-only — live order counts for the sidebar badge.
   * Declared before ':id' so 'summary' is not parsed as an order id.
   */
  @UseGuards(JwtAuthGuard)
  @Get('summary')
  summary() {
    return this.service.summary();
  }

  /**
   * Admin-only — delete ALL orders at once.
   * Declared before ':id' so 'all' is not parsed as an order id.
   */
  @UseGuards(JwtAuthGuard)
  @Delete('all')
  removeAll() {
    return this.service.removeAll();
  }

  /** Admin-only — one order, for the detail page. */
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(parseInt(id, 10));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.service.updateStatus(parseInt(id, 10), body?.status);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(parseInt(id, 10));
  }
}