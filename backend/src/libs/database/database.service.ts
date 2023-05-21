import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { PrismaService } from './common/prisma/prisma.service';
import { ImagesRepository } from './common/repositories/images-repository.service';

@Injectable()
export class DatabaseService {
  public constructor(
    private readonly prisma: PrismaService,
    public readonly image: ImagesRepository,
  ) {}

  public makeTransaction = async (
    transactions: PrismaPromise<any>[],
  ): Promise<void> => {
    await this.prisma.$transaction(transactions);
  };
}
