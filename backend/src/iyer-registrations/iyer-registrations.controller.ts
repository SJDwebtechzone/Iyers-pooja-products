import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { IyerRegistrationsService } from './iyer-registrations.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('iyer-registrations')
export class IyerRegistrationsController {
  constructor(private readonly service: IyerRegistrationsService) {}

  // Public — customer submits from the navbar modal
  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  // Admin-only — dashboard views submitted registrations
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