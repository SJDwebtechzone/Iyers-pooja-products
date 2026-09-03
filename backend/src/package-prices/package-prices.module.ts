import { Module } from '@nestjs/common';
import { PackagePricesController } from './package-prices.controller';
import { PackagePricesService } from './package-prices.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [PackagePricesController],
  providers: [PackagePricesService],
})
export class PackagePricesModule {}