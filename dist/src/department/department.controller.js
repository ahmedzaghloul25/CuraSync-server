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
exports.DepartmentController = void 0;
const common_1 = require("@nestjs/common");
const department_service_1 = require("./department.service");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
const DTO_1 = require("./DTO");
const pipes_1 = require("../../common/pipes");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const roles_1 = require("../../common/types/roles");
let DepartmentController = class DepartmentController {
    departmentService;
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    addDepartment(body, employee, hospital) {
        return this.departmentService.addDepartment(body, employee, hospital);
    }
    updateDepartment(departmentId, body, employee, hospital) {
        return this.departmentService.updateDepartment({ ...body, departmentId }, employee, hospital);
    }
    getDepartment(departmentId, employee, hospital) {
        return this.departmentService.getDepartment(departmentId, employee, hospital);
    }
    getAllDepartments(page = 1, limit = 10, employee, hospital) {
        return this.departmentService.getAllDepartments(hospital, employee, page, limit);
    }
};
exports.DepartmentController = DepartmentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseGuards)(guards_1.AuthenticationGuard, guards_1.AuthorizationGuard),
    (0, decorators_1.Roles)(roles_1.AdminRoles.HOSPITAL_ADMINISTRATOR),
    (0, swagger_1.ApiParam)({ name: "hospitalId", description: "Hospital ID" }),
    (0, swagger_1.ApiOperation)({ summary: "Create new department" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Department created successfully",
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.Employee)()),
    __param(2, (0, common_1.Param)("hospitalId", pipes_1.HospitalValidation)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DTO_1.AddDepartmentDto, Object, Object]),
    __metadata("design:returntype", void 0)
], DepartmentController.prototype, "addDepartment", null);
__decorate([
    (0, common_1.Put)(":departmentId"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(guards_1.AuthenticationGuard, guards_1.AuthorizationGuard),
    (0, decorators_1.Roles)(roles_1.AdminRoles.HOSPITAL_ADMINISTRATOR),
    (0, swagger_1.ApiOperation)({ summary: "Update department head" }),
    (0, swagger_1.ApiParam)({ name: "hospitalId", description: "Hospital ID" }),
    (0, swagger_1.ApiParam)({ name: "departmentId", description: "Department ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Department updated successfully",
    }),
    __param(0, (0, common_1.Param)("departmentId", mongoose_1.ParseObjectIdPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.Employee)()),
    __param(3, (0, common_1.Param)("hospitalId", pipes_1.HospitalValidation)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, DTO_1.UpdateDepartmentDto, Object, Object]),
    __metadata("design:returntype", void 0)
], DepartmentController.prototype, "updateDepartment", null);
__decorate([
    (0, common_1.Get)(":departmentId"),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(guards_1.AuthenticationGuard, guards_1.AuthorizationGuard),
    (0, decorators_1.Roles)(...Object.values(roles_1.AdminRoles)),
    (0, swagger_1.ApiOperation)({ summary: "Get department by ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Department retrieved successfully",
    }),
    (0, swagger_1.ApiParam)({ name: "hospitalId", description: "Hospital ID" }),
    (0, swagger_1.ApiParam)({ name: "departmentId", description: "Department ID" }),
    __param(0, (0, common_1.Param)("departmentId", mongoose_1.ParseObjectIdPipe)),
    __param(1, (0, decorators_1.Employee)()),
    __param(2, (0, common_1.Param)("hospitalId", pipes_1.HospitalValidation)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], DepartmentController.prototype, "getDepartment", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(guards_1.AuthenticationGuard, guards_1.AuthorizationGuard),
    (0, decorators_1.Roles)(...Object.values(roles_1.AdminRoles)),
    (0, swagger_1.ApiParam)({ name: "hospitalId", description: "Hospital ID" }),
    (0, swagger_1.ApiOperation)({ summary: "Get all departments with pagination" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Departments retrieved successfully",
    }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __param(2, (0, decorators_1.Employee)()),
    __param(3, (0, common_1.Param)("hospitalId", pipes_1.HospitalValidation)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], DepartmentController.prototype, "getAllDepartments", null);
exports.DepartmentController = DepartmentController = __decorate([
    (0, swagger_1.ApiTags)("Departments"),
    (0, common_1.Controller)({ version: "1", path: "hospitals/:hospitalId/departments" }),
    __metadata("design:paramtypes", [department_service_1.DepartmentService])
], DepartmentController);
//# sourceMappingURL=department.controller.js.map