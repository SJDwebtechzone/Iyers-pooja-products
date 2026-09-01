import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { MailModule } from './mail/mail.module';
import { ConsumerPackagesModule } from './consumer-packages/consumer-packages.module';
import { CorporatePackagesModule } from './corporate-packages/corporate-packages.module';
import { TemplePackagesModule } from './temple-packages/temple-packages.module';
import { FestivalsPackagesModule } from './festivals-packages/festivals-packages.module';
import { OverseasTemplePackageModule } from './overseas-temple-package/overseas-temple-package.module';
import { HomeBannerModule } from './home-banner/home-banner.module';
import { HomePackageImagesModule } from './home-package-images/home-package-images.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
    MailModule,
    ConsumerPackagesModule,
    CorporatePackagesModule,
    TemplePackagesModule,
    FestivalsPackagesModule,
    OverseasTemplePackageModule,
    HomeBannerModule,
    HomePackageImagesModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}