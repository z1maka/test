import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class IsBufferConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return Buffer.isBuffer(value);
  }
}

export function IsBuffer(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'isBuffer',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsBufferConstraint,
    });
  };
}
