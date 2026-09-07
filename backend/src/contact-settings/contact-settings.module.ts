import { Module } from '@nestjs/common';
import { ContactSettingsController } from './contact-settings.controller';
import { ContactSettingsService } from './contact-settings.service';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [ContactSettingsController],
  providers: [ContactSettingsService],
  exports: [ContactSettingsService],
})
export class ContactSettingsModule {}
