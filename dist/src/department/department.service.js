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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const catalog_1 = require("../DB/repository/catalog");
const hospital_dep_repoService_1 = require("../DB/repository/hospital/hospital.dep.repoService");
const mongoose_1 = require("mongoose");
const hospital_emp_repoService_1 = require("../DB/repository/hospital/hospital.emp.repoService");
const databaseIdResolver_1 = require("../../common/services/databaseIdResolver");
let DepartmentService = class DepartmentService {
    departmentCatalog;
    hospitalDepartmentRepoService;
    employeeRepoService;
    crossDbResolverService;
    logger;
    constructor(departmentCatalog, hospitalDepartmentRepoService, employeeRepoService, crossDbResolverService, logger) {
        this.departmentCatalog = departmentCatalog;
        this.hospitalDepartmentRepoService = hospitalDepartmentRepoService;
        this.employeeRepoService = employeeRepoService;
        this.crossDbResolverService = crossDbResolverService;
        this.logger = logger;
    }
    async addDepartment(body, employee, hospital) {
        try {
            const departmentCatalog = await this.departmentCatalog.findOne({
                _id: body.catalogId,
            });
            if (!departmentCatalog) {
                throw new common_1.NotFoundException(`Department catalog not found`);
            }
            if (!hospital.createdBy.equals(employee._id)) {
                throw new common_1.UnauthorizedException(`You are not authorized to add a department to this hospital`);
            }
            const departmentHead = await this.employeeRepoService.findOne({
                _id: body.head,
            });
            if (!departmentHead || !departmentHead.hospital.equals(hospital._id)) {
                throw new common_1.UnauthorizedException(`Department head not found`);
            }
            const newDepartment = (await this.hospitalDepartmentRepoService.create({
                departmentCatalogId: departmentCatalog._id,
                head: new mongoose_1.Types.ObjectId(body.head),
                hospital: hospital._id,
                createdBy: employee._id,
            }));
            this.logger.log(`[Hospital Department] New department created with ID: ${newDepartment._id} in hospital: ${hospital._id}`);
            return {
                message: "success",
                department: {
                    name: departmentCatalog.name,
                    catalogId: departmentCatalog._id,
                    head: departmentHead._id,
                    hospital: hospital._id,
                    createdBy: employee._id,
                    _id: newDepartment._id,
                },
            };
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException(`Department already exists in this hospital`);
            }
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            else {
                this.logger.error(`[Hospital Department] Error creating department: ${error.message}`, error.stack);
                throw new common_1.InternalServerErrorException("Failed to create department");
            }
        }
    }
    async updateDepartment(body, employee, hospital) {
        try {
            if (!employee.hospital.equals(hospital._id)) {
                throw new common_1.UnauthorizedException(`You are not authorized to update this department`);
            }
            const department = await this.hospitalDepartmentRepoService.findOne({
                _id: body.departmentId,
                hospital: hospital._id,
                isFreezed: { $exists: false },
            });
            if (!department) {
                throw new common_1.NotFoundException(`Department not found`);
            }
            const newHead = await this.employeeRepoService.findOne({
                _id: body.newHead,
                hospital: hospital._id,
            });
            if (!newHead) {
                throw new common_1.NotFoundException(`New department head not found`);
            }
            if (department.head.equals(newHead._id)) {
                return {
                    message: "success",
                    info: "Department head unchanged",
                };
            }
            await this.hospitalDepartmentRepoService.updateOne({ _id: department._id }, { head: newHead._id, modifiedBy: employee._id });
            this.logger.log(`[Hospital Department] Department ${department._id} updated with new head: ${newHead._id}`);
            return {
                message: "success",
                department: {
                    _id: department._id,
                    previousHead: department.head,
                    newHead: newHead._id,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            else {
                this.logger.error(`[Hospital Department] Error updating department: ${error.message}`, error.stack);
                throw new common_1.InternalServerErrorException("Failed to update department");
            }
        }
    }
    async getDepartment(departmentId, employee, hospital) {
        try {
            if (!employee.hospital.equals(hospital._id)) {
                throw new common_1.UnauthorizedException(`You are not authorized to view this department`);
            }
            const department = await this.hospitalDepartmentRepoService.findOne({
                _id: departmentId,
                hospital: hospital._id,
                isFreezed: { $exists: false },
                isConfirmed: true,
            });
            if (!department) {
                throw new common_1.NotFoundException(`Department not found`);
            }
            const enrichedDepartment = await this.crossDbResolverService.enrichReferences(department);
            return {
                message: "success",
                department: enrichedDepartment,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            this.logger.error(`[Hospital Department] Error retrieving department: ${error.message}`, error.stack);
            throw new common_1.InternalServerErrorException("Failed to retrieve department");
        }
    }
    async getAllDepartments(hospital, employee, page = 1, limit = 10) {
        try {
            if (!employee.hospital.equals(hospital._id)) {
                throw new common_1.UnauthorizedException(`Employee from hospital ${employee.hospital} not authorized to view departments in hospital ${hospital._id}`);
            }
            if (page < 1 || limit < 1 || limit > 100) {
                throw new common_1.BadRequestException("Invalid pagination parameters");
            }
            const skip = (page - 1) * limit;
            const departments = await this.hospitalDepartmentRepoService.findAll({
                hospital: hospital._id,
                isConfirmed: true,
            }, {}, skip, limit);
            if (!departments || departments.length === 0) {
                throw new common_1.NotFoundException(`No departments found in hospital ${hospital._id}`);
            }
            const enrichedDepartments = await Promise.all(departments.map(async (department) => {
                try {
                    return await this.crossDbResolverService.enrichReferences(department);
                }
                catch (error) {
                    this.logger.error(`[Hospital Department] Error enriching department ${department._id}: ${error.message}`, error.stack);
                    return department;
                }
            }));
            const totalCount = await this.hospitalDepartmentRepoService.count({
                hospital: hospital._id,
                isConfirmed: true,
            });
            return {
                message: "success",
                date: {
                    departments: enrichedDepartments,
                    pagination: {
                        total: totalCount,
                        page,
                        limit,
                        pages: Math.ceil(totalCount / limit),
                    },
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            this.logger.error(`[Hospital Department] Error retrieving departments: ${error.message}`, error.stack);
            throw new common_1.InternalServerErrorException("Failed to retrieve departments");
        }
    }
};
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [catalog_1.DepartmentCatalogRepoService,
        hospital_dep_repoService_1.default,
        hospital_emp_repoService_1.EmployeeRepoService,
        databaseIdResolver_1.CrossDbResolverService,
        common_1.Logger])
], DepartmentService);
//# sourceMappingURL=department.service.js.map