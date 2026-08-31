import { Module } from '@nestjs/common';
import { HomePackageImagesController } from './home-package-images.controller';
import { HomePackageImagesService } from './home-package-images.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HomePackageImagesController],
  providers: [HomePackageImagesService],
})
export class HomePackageImagesModule {}