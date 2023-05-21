/* eslint-disable @typescript-eslint/typedef */
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

// TODO provide types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IBaseDelegate<GlobalRejectSettings> {
  upsert: (...args: any) => any;
  create: (...args: any) => any;
  update: (...args: any) => any;
  findUnique: (...args: any) => any;
  delete: (...args: any) => any;
  count: (...args: any) => any;
  createMany: (...args: any) => any;
  findFirst: (...args: any) => any;
  updateMany: (...args: any) => any;
  findMany: (...args: any) => any;
}

export abstract class BaseRepository<
  Delegate extends IBaseDelegate<any> = IBaseDelegate<any>,
  Entity = any,
> {
  protected constructor(
    public readonly dbService: PrismaService,
    private readonly modelName: Prisma.ModelName,
  ) {
    this.dbService = dbService;
    this.modelName = (modelName[0].toLowerCase() +
      modelName.substring(1)) as Prisma.ModelName;
  }

  public upsert: Delegate['upsert'] = (
    ...args
  ): Promise<Entity | Partial<Entity>> =>
    this.dbService[this.modelName].upsert(...args);

  public create: Delegate['create'] = (
    ...args
  ): Promise<Entity | Partial<Entity>> =>
    this.dbService[this.modelName].create(...args);

  public update: Delegate['update'] = (
    ...args
  ): Promise<Entity | Partial<Entity>> =>
    this.dbService[this.modelName].update(...args);

  public get: Delegate['findUnique'] = (...args): Promise<Entity> =>
    this.dbService[this.modelName].findUnique(...args);

  public getList: Delegate['findMany'] = (
    ...args
  ): Promise<Array<Entity | Partial<Entity>>> =>
    this.dbService[this.modelName].findMany(...args);

  public delete: Delegate['delete'] = (
    ...args
  ): Promise<Entity | Partial<Entity>> =>
    this.dbService[this.modelName].delete(...args);

  public count: Delegate['count'] = (...args): Promise<number> =>
    this.dbService[this.modelName].count(...args);

  public createMany: Delegate['createMany'] = (
    ...args
  ): Promise<Entity | Partial<Entity>> =>
    this.dbService[this.modelName].createMany(...args);

  public findFirst: Delegate['findFirst'] = (
    ...args
  ): Promise<Entity | Partial<Entity>> =>
    this.dbService[this.modelName].findFirst(...args);

  public updateMany: Delegate['updateMany'] = (
    ...args
  ): Promise<Entity | Partial<Entity>> =>
    this.dbService[this.modelName].updateMany(...args);
}
