import { Module } from '@nestjs/common';
import { ConsumerPackagesController } from './consumer-packages.controller';
import { ConsumerPackagesService } from './consumer-packages.service';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [ConsumerPackagesController],
  providers: [ConsumerPackagesService],
})
export class ConsumerPackagesModule {}