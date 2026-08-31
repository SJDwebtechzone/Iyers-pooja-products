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
import { CorporatePackagesService } from './corporate-packages.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('corporate-packages')
export class CorporatePackagesController {
  constructor(private readonly corporatePackagesService: CorporatePackagesService) {}

  @Get(':category')
  findAll(@Param('category') category: string) {
    return this.corporatePackagesService.findAll(category);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':category')
  create(@Param('category') category: string, @Body() data: any) {
    return this.corporatePackagesService.create(category, data);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':category/:id')
  update(
    @Param('category') category: string,
    @Param('id') id: string,
    @Body() data: any,
  ) {
    return this.corporatePackagesService.update(category, id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':category/:id')
  remove(@Param('category') category: string, @Param('id') id: string) {
    return this.corporatePackagesService.remove(category, id);
  }
}