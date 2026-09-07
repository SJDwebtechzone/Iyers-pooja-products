import { Module } from '@nestjs/common';
import { IyerRegistrationsController } from './iyer-registrations.controller';
import { IyerRegistrationsService } from './iyer-registrations.service';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [DatabaseModule, AuthModule, NotificationsModule],
  controllers: [IyerRegistrationsController],
  providers: [IyerRegistrationsService],
})
export class IyerRegistrationsModule {}
