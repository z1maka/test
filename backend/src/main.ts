import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { ConfigurationService } from '@modules/configuration/configuration.service';
import { Logger } from '@lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // logger
  const logger = app.get(Logger);
  app.useLogger(logger);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const configuration = app.get(ConfigurationService);

  await app.listen(configuration.getPort(), async () => {
    const url = await app.getUrl();
    console.log(`Server is running on ${url}`);
  });
}

bootstrap();
