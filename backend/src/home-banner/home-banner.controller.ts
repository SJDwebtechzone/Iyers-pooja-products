import {
  Controller,
  Get,
  Patch,
  Body,
  UseInterceptors,
  UploadedFile,
  PayloadTooLargeException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { HomeBannerService } from './home-banner.service';

@Controller('home-banner')
export class HomeBannerController {
  constructor(private readonly service: HomeBannerService) {}

  @Get()
  find() {
    return this.service.find();
  }

  @Patch()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: '../frontend/public/images',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now();
          callback(null, `herobanner-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
    }),
  )
  async update(@Body() body: any, @UploadedFile() file?: Express.Multer.File) {
    const data = { ...body };
    if (file) {
      data.image_filename = file.filename;
    }
    return this.service.update(data);
  }
}