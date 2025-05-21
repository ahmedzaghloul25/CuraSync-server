"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const hospital_employee_schema_1 = require("../DB/schemas/hospital/hospital.employee.schema");
const services_1 = require("../../common/services");
const event_emitter_1 = require("@nestjs/event-emitter");
const hospital_emp_repoService_1 = require("../DB/repository/hospital/hospital.emp.repoService");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [hospital_employee_schema_1.EmployeeModule, event_emitter_1.EventEmitterModule.forRoot()],
        controllers: [auth_controller_1.AuthController],
        providers: [hospital_emp_repoService_1.EmployeeRepoService, services_1.Hashing, services_1.Otp, auth_service_1.AuthService, services_1.SendEmail],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map