import { IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import EnvironmentVariableEnum from '../enums/environment-variable.enum';
import NodeEnvEnum from '../enums/node-env.enum';

class EnvironmentVariablesModel
  implements Record<EnvironmentVariableEnum, string | number>
{
  @IsNumber(undefined, { message: 'PORT is not provided' })
  public PORT: number;

  @Transform(
    ({ value }: TransformFnParams): NodeEnvEnum =>
      value || NodeEnvEnum.Development,
  )
  public NODE_ENV: NodeEnvEnum;

  @IsString({ message: 'DATABASE_URL is not provided' })
  public DATABASE_URL: string;
}

export default EnvironmentVariablesModel;
