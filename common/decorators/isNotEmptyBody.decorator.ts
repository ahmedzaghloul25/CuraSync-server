import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsNotEmptyBody(validationOptions?: ValidationOptions) {
  return function (target: any, propertyName: string) {
    registerDecorator({
      name: "isNotEmptyBody",
      target: target.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const object = args.object;
          return Object.keys(object)
            .filter((key) => !key.startsWith("__") && key !== propertyName)
            .some(
              (key) =>
                object[key] !== null &&
                object[key] !== undefined &&
                object[key] !== ""
            );
        },
        defaultMessage(args: ValidationArguments) {
          return "Request body cannot be empty";
        },
      },
    });
  };
}
