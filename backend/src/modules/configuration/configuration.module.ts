import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ConfigurationService } from './configuration.service';

@Module({
  providers: [ConfigurationService],
  exports: [ConfigurationService],
  imports: [ConfigModule],
})
export class ConfigurationModule {}
