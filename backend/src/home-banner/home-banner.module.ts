import { Module } from '@nestjs/common';
import { HomeBannerController } from './home-banner.controller';
import { HomeBannerService } from './home-banner.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HomeBannerController],
  providers: [HomeBannerService],
})
export class HomeBannerModule {}