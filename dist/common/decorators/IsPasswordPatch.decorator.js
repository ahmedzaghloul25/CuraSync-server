"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPasswordMatch = IsPasswordMatch;
const class_validator_1 = require("class-validator");
function IsPasswordMatch(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isPasswordMatch',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const obj = args.object;
                    const password = obj.password;
                    return password === value;
                },
                defaultMessage(args) {
                    return 'Password and confirm password do not match';
                },
            },
        });
    };
}
//# sourceMappingURL=IsPasswordPatch.decorator.js.map