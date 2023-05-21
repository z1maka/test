import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

export const validateEnvs =
  <T extends Object>(ctx: ClassConstructor<T>) =>
  (config: Record<string, unknown>): T => {
    const validatedConfig = plainToClass(
      ctx,
      {
        ...config,
      },
      {
        enableImplicitConversion: true,
      },
    );

    const errors = validateSync(validatedConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    return validatedConfig;
  };

export default validateEnvs;
