import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { OverseasTemplePackageService } from './overseas-temple-package.service';

@Controller('overseas-temple-package')
export class OverseasTemplePackageController {
  constructor(private readonly service: OverseasTemplePackageService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}