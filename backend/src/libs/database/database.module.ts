import { Module } from '@nestjs/common';

import { DatabaseService } from './database.service';
import { CommonModule } from './common/common.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
  imports: [CommonModule, PrismaModule],
})
export class DatabaseModule {}
