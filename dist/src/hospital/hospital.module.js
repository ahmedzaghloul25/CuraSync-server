"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalModule = void 0;
const common_1 = require("@nestjs/common");
const hospital_controller_1 = require("./hospital.controller");
const hospital_service_1 = require("./hospital.service");
const hospital_repoService_1 = require("../DB/repository/hospital/hospital.repoService");
const services_1 = require("../../common/services");
const hospital_schema_1 = require("../DB/schemas/hospital/hospital.schema");
const jwtToken_1 = require("../../common/services/jwtToken");
const jwt_1 = require("@nestjs/jwt");
const hospital_emp_repoService_1 = require("../DB/repository/hospital/hospital.emp.repoService");
const hospital_employee_schema_1 = require("../DB/schemas/hospital/hospital.employee.schema");
let HospitalModule = class HospitalModule {
};
exports.HospitalModule = HospitalModule;
exports.HospitalModule = HospitalModule = __decorate([
    (0, common_1.Module)({
        imports: [hospital_employee_schema_1.employeeModule, hospital_schema_1.hospitalModule],
        controllers: [hospital_controller_1.HospitalController],
        providers: [
            jwtToken_1.JwtToken,
            jwt_1.JwtService,
            hospital_emp_repoService_1.EmployeeRepoService,
            hospital_service_1.HospitalService,
            hospital_repoService_1.default,
            services_1.FileUploader,
            common_1.Logger,
            services_1.Hashing
        ],
    })
], HospitalModule);
//# sourceMappingURL=hospital.module.js.map