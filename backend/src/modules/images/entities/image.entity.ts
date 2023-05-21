import { Image } from '@prisma/client';
import { IsString } from 'class-validator';
import { IsBuffer } from '@shared/decorators/is-buffer.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class ImageEntity implements Image {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  alt: string;

  @IsBuffer()
  @ApiProperty()
  data: Buffer;
}
