import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TemplePackagesService } from './temple-packages.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('temple-packages')
export class TemplePackagesController {
  constructor(private readonly templePackagesService: TemplePackagesService) {}

  @Get()
  findAll() {
    return this.templePackagesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: any) {
    return this.templePackagesService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.templePackagesService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templePackagesService.remove(id);
  }
}