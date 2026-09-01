import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(parseInt(id, 10));
  }
}