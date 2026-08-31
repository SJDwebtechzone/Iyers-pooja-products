import { Module } from '@nestjs/common';
import { TemplePackagesService } from './temple-packages.service';
import { TemplePackagesController } from './temple-packages.controller';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [TemplePackagesController],
  providers: [TemplePackagesService],
})
export class TemplePackagesModule {}