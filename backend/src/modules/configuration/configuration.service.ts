import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import NodeEnvEnum from '@shared/enums/node-env.enum';
import EnvironmentVariableEnum from '@shared/enums/environment-variable.enum';
import EnvironmentVariablesModel from '@shared/models/environment-variables.model';

@Injectable()
export class ConfigurationService {
  public constructor(private readonly configService: ConfigService) {}

  public getIsProduction = (): boolean =>
    this.configService.get<NodeEnvEnum>(EnvironmentVariableEnum.Env) ===
    NodeEnvEnum.Production;

  public getPort =
    (): EnvironmentVariablesModel[EnvironmentVariableEnum.Port] =>
      this.configService.get<
        EnvironmentVariablesModel[EnvironmentVariableEnum.Port]
      >(EnvironmentVariableEnum.Port);
}
