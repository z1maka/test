import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { DatabaseModule } from '@lib';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [DatabaseModule],
})
export class ImagesModule {}
