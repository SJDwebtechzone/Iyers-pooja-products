import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

/** Admin-only. Notifications are internal and never exposed to the website. */
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}

  /** Bell dropdown: recent notifications plus the live unread counts. */
  @Get()
  feed(@Query('limit') limit?: string) {
    return this.service.feed(limit ? parseInt(limit, 10) : 20);
  }

  /** Counts only — cheap enough to poll. */
  @Get('summary')
  summary() {
    return this.service.summary();
  }

  @Patch(':id/read')
  markRead(@Param('id') id: string) {
    return this.service.markRead(parseInt(id, 10));
  }

  /** `?type=booking` clears only that kind; omit it to clear everything. */
  @Post('read-all')
  markAllRead(@Query('type') type?: string) {
    return this.service.markAllRead(type);
  }
}
