import { Prisma } from '@prisma/client';
import { ImageEntity } from '@modules/images/entities/image.entity';

export class CreateImageDto
  extends ImageEntity
  implements Prisma.ImageCreateInput
{
  public override id: never;
}
