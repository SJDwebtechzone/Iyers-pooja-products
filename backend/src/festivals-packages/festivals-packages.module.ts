import { Module } from '@nestjs/common';
import { FestivalsPackagesController } from './festivals-packages.controller';
import { FestivalsPackagesService } from './festivals-packages.service';

@Module({
  controllers: [FestivalsPackagesController],
  providers: [FestivalsPackagesService],
})
export class FestivalsPackagesModule {}