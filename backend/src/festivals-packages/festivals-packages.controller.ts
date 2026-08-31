import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { FestivalsPackagesService } from './festivals-packages.service';

@Controller('festivals-packages')
export class FestivalsPackagesController {
  constructor(private readonly festivalsPackagesService: FestivalsPackagesService) {}

  @Get(':category')
  findAll(@Param('category') category: string) {
    return this.festivalsPackagesService.findAll(category);
  }

  @Post(':category')
  create(@Param('category') category: string, @Body() body: any) {
    return this.festivalsPackagesService.create(category, body);
  }

  @Patch(':category/:id')
  update(@Param('category') category: string, @Param('id') id: string, @Body() body: any) {
    return this.festivalsPackagesService.update(category, id, body);
  }

  @Delete(':category/:id')
  remove(@Param('category') category: string, @Param('id') id: string) {
    return this.festivalsPackagesService.remove(category, id);
  }
}