import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PaymentSettingsService } from './payment-settings.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

const ALLOWED_QR_TYPES = ['image/png', 'image/jpeg', 'image/webp'];

@Controller('payment-settings')
export class PaymentSettingsController {
  constructor(private readonly service: PaymentSettingsService) {}

  /**
   * Public — the Order Now modal reads the live payment details from here.
   * Only display fields are returned; there are no secrets in this table.
   */
  @Get()
  find() {
    return this.service.find();
  }

  /** Admin-only — update details and/or replace the UPI QR image. */
  @UseGuards(JwtAuthGuard)
  @Patch()
  @UseInterceptors(
    FileInterceptor('qr', {
      storage: diskStorage({
        destination: '../frontend/public/images',
        filename: (req, file, callback) => {
          callback(
            null,
            `payment-qr-${Date.now()}${extname(file.originalname)}`,
          );
        },
      }),
      limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
      fileFilter: (req, file, callback) => {
        if (!ALLOWED_QR_TYPES.includes(file.mimetype)) {
          return callback(
            new BadRequestException(
              'QR code must be a PNG, JPEG or WebP image',
            ),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  async update(@Body() body: any, @UploadedFile() file?: Express.Multer.File) {
    const data: Record<string, unknown> = { ...body };
    if (file) {
      data.qr_filename = file.filename;
    }
    return this.service.update(data);
  }
}
