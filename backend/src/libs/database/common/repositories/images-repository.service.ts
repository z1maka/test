import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ImagesRepository extends BaseRepository<
  Prisma.ImageDelegate<any>
> {
  public constructor(private readonly prisma: PrismaService) {
    super(prisma, 'Image');
  }
}
