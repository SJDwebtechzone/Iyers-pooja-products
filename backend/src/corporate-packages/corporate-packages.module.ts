import { Module } from '@nestjs/common';
import { CorporatePackagesService } from './corporate-packages.service';
import { CorporatePackagesController } from './corporate-packages.controller';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [CorporatePackagesController],
  providers: [CorporatePackagesService],
})
export class CorporatePackagesModule {}