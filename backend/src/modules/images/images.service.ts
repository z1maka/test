import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { DatabaseService } from '@lib';

@Injectable()
export class ImagesService {
  constructor(private databaseService: DatabaseService) {}
  create(createImageDto: CreateImageDto) {
    return this.databaseService.image.create({ data: createImageDto });
  }

  findAll() {
    return this.databaseService.image.getList();
  }

  findOne(id: number) {
    return this.databaseService.image.get({ where: { id } });
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return this.databaseService.image.update({
      where: { id },
      data: updateImageDto,
    });
  }

  remove(id: number) {
    return this.databaseService.image.delete({
      where: { id },
    });
  }
}
