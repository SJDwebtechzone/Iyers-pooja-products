import { Module } from '@nestjs/common';
import { IyerRegistrationsController } from './iyer-registrations.controller';
import { IyerRegistrationsService } from './iyer-registrations.service';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [IyerRegistrationsController],
  providers: [IyerRegistrationsService],
})
export class IyerRegistrationsModule {}