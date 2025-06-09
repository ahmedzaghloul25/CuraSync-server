"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const common_1 = require("@nestjs/common");
const department_controller_1 = require("./department.controller");
const department_service_1 = require("./department.service");
const hospital_department_schema_1 = require("../DB/schemas/hospital/hospital.department.schema");
const hospital_dep_repoService_1 = require("../DB/repository/hospital/hospital.dep.repoService");
const hospital_emp_repoService_1 = require("../DB/repository/hospital/hospital.emp.repoService");
const hospital_employee_schema_1 = require("../DB/schemas/hospital/hospital.employee.schema");
const modules_1 = require("../../common/modules");
const services_1 = require("../../common/services");
const jwt_1 = require("@nestjs/jwt");
const hospital_repoService_1 = require("../DB/repository/hospital/hospital.repoService");
const hospital_schema_1 = require("../DB/schemas/hospital/hospital.schema");
let DepartmentModule = class DepartmentModule {
};
exports.DepartmentModule = DepartmentModule;
exports.DepartmentModule = DepartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [hospital_department_schema_1.HospitalDepartmentModule, hospital_employee_schema_1.employeeModule, modules_1.DbResolverModule, hospital_schema_1.hospitalModule],
        controllers: [department_controller_1.DepartmentController],
        providers: [
            department_service_1.DepartmentService,
            hospital_dep_repoService_1.default,
            hospital_emp_repoService_1.EmployeeRepoService,
            common_1.Logger,
            services_1.JwtToken,
            jwt_1.JwtService,
            hospital_repoService_1.default
        ],
    })
], DepartmentModule);
//# sourceMappingURL=department.module.js.map