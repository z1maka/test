import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ImagesRepository } from './repositories/images-repository.service';

@Module({
  imports: [PrismaModule],
  providers: [ImagesRepository],
  exports: [ImagesRepository],
})
export class CommonModule {}
