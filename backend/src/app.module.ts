import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ImagesModule } from '@modules/images/images.module';
import { ConfigurationModule } from '@modules/configuration/configuration.module';
import { LoggerModule } from '@lib';
import EnvironmentVariablesModel from '@shared/models/environment-variables.model';
import validateEnvs from '@shared/utils/validateEnvs';

@Module({
  imports: [
    ConfigurationModule,
    ConfigModule.forRoot({
      validate: validateEnvs(EnvironmentVariablesModel),
    }),
    ImagesModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
