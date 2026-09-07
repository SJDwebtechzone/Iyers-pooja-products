import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ContactSettingsService } from './contact-settings.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('contact-settings')
export class ContactSettingsController {
  constructor(private readonly service: ContactSettingsService) {}

  /**
   * Public — the floating WhatsApp / Call buttons read the live numbers here.
   * These are the business's own published contact details; no secrets.
   */
  @Get()
  find() {
    return this.service.find();
  }

  /** Admin-only. */
  @UseGuards(JwtAuthGuard)
  @Patch()
  update(@Body() body: Record<string, unknown>) {
    return this.service.update(body);
  }
}
