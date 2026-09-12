import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly service: BookingsService) {}

  // Public — customer submits from the website
  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  // Admin-only — dashboard views submitted bookings
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // Admin-only — delete ALL bookings at once.
  // Declared before ':id' so 'all' is not parsed as a booking id.
  @UseGuards(JwtAuthGuard)
  @Delete('all')
  removeAll() {
    return this.service.removeAll();
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(parseInt(id, 10));
  }
}