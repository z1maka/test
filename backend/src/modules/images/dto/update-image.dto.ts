import { Prisma } from '@prisma/client';
import { ImageEntity } from '@modules/images/entities/image.entity';

export class UpdateImageDto
  extends ImageEntity
  implements Prisma.ImageUpdateInput
{
  public override id: never;
}
