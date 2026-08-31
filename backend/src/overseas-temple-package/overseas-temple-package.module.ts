import { Module } from '@nestjs/common';
import { OverseasTemplePackageController } from './overseas-temple-package.controller';
import { OverseasTemplePackageService } from './overseas-temple-package.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OverseasTemplePackageController],
  providers: [OverseasTemplePackageService],
})
export class OverseasTemplePackageModule {}