import {
  Controller,
  Get,
  Patch,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { HomePackageImagesService } from './home-package-images.service';

@Controller('home-package-images')
export class HomePackageImagesController {
  constructor(private readonly service: HomePackageImagesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: '../frontend/public/images',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now();
          callback(null, `pkg-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
    }),
  )
  async updateImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      return { error: 'No image uploaded' };
    }
    return this.service.updateImage(id, file.filename);
  }
}