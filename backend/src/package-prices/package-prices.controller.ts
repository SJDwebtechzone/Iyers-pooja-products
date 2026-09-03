import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { PackagePricesService } from './package-prices.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // adjust path to match your existing guard

@Controller('package-prices')
export class PackagePricesController {
  constructor(private readonly service: PackagePricesService) {}

  @Get()
  getAll() {
    return this.service.getAllPrices();
  }

  @Get(':categoryKey')
  getOne(@Param('categoryKey') categoryKey: string) {
    return this.service.getPrice(categoryKey);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':categoryKey')
  setPrice(
    @Param('categoryKey') categoryKey: string,
    @Body('price') price: string,
  ) {
    return this.service.setPrice(categoryKey, price);
  }
}