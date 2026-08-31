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
import { ConsumerPackagesService } from './consumer-packages.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('consumer-packages')
export class ConsumerPackagesController {
  constructor(private readonly service: ConsumerPackagesService) {}

  @Get(':category')
  findAll(@Param('category') category: string) {
    return this.service.findAll(category);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':category')
  create(@Param('category') category: string, @Body() dto: any) {
    return this.service.create(category, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':category/:id')
  update(
    @Param('category') category: string,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    return this.service.update(category, parseInt(id, 10), dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':category/:id')
  remove(@Param('category') category: string, @Param('id') id: string) {
    return this.service.remove(category, parseInt(id, 10));
  }
}