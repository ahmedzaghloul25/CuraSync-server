"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotEmptyBody = IsNotEmptyBody;
const class_validator_1 = require("class-validator");
function IsNotEmptyBody(validationOptions) {
    return function (target, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "isNotEmptyBody",
            target: target.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const object = args.object;
                    return Object.keys(object)
                        .filter((key) => !key.startsWith("__") && key !== propertyName)
                        .some((key) => object[key] !== null &&
                        object[key] !== undefined &&
                        object[key] !== "");
                },
                defaultMessage(args) {
                    return "Request body cannot be empty";
                },
            },
        });
    };
}
//# sourceMappingURL=isNotEmptyBody.decorator.js.map