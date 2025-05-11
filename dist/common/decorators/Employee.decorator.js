"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const common_1 = require("@nestjs/common");
exports.Employee = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    const { employee } = request;
    return employee;
});
//# sourceMappingURL=Employee.decorator.js.map