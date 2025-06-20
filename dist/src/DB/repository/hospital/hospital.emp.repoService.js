"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepoService = void 0;
const common_1 = require("@nestjs/common");
const db_repo_service_1 = require("../db.repo.service");
const hospital_employee_schema_1 = require("../../schemas/hospital/hospital.employee.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const services_1 = require("../../../../common/services");
const types_1 = require("../../../../common/types");
let EmployeeRepoService = class EmployeeRepoService extends db_repo_service_1.DbRepoService {
    employeeModel;
    hashing;
    constructor(employeeModel, hashing) {
        super(employeeModel);
        this.employeeModel = employeeModel;
        this.hashing = hashing;
        const that = this;
        employeeModel.schema.pre("save", function (next) {
            this.password = that.hashing.createHash(this.password);
            next();
        });
    }
};
exports.EmployeeRepoService = EmployeeRepoService;
exports.EmployeeRepoService = EmployeeRepoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hospital_employee_schema_1.Employee.name, types_1.connectionNameString.HOSPITAL)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        services_1.Hashing])
], EmployeeRepoService);
//# sourceMappingURL=hospital.emp.repoService.js.map