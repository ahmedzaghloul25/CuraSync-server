import { Logger } from "@nestjs/common";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
import { AddDepartmentDto, UpdateDepartmentDto } from "./DTO";
import { DepartmentCatalogRepoService } from "src/DB/repository/catalog";
import HospitalDepartmentRepoService from "src/DB/repository/hospital/hospital.dep.repoService";
import { Types } from "mongoose";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { CrossDbResolverService } from "common/services/databaseIdResolver";
import { EnrichedDepartmentDoc } from "common/types/types";
export declare class DepartmentService {
    private readonly departmentCatalog;
    private readonly hospitalDepartmentRepoService;
    private readonly employeeRepoService;
    private readonly crossDbResolverService;
    private readonly logger;
    constructor(departmentCatalog: DepartmentCatalogRepoService, hospitalDepartmentRepoService: HospitalDepartmentRepoService, employeeRepoService: EmployeeRepoService, crossDbResolverService: CrossDbResolverService, logger: Logger);
    addDepartment(body: AddDepartmentDto, employee: EmployeeDocument, hospital: HospitalDocument): Promise<{
        message: string;
        department: {
            name: string;
            catalogId: Types.ObjectId;
            head: Types.ObjectId;
            hospital: Types.ObjectId;
            createdBy: Types.ObjectId;
            _id: Types.ObjectId;
        };
    }>;
    updateDepartment(body: UpdateDepartmentDto, employee: EmployeeDocument, hospital: HospitalDocument): Promise<{
        message: string;
        info: string;
        department?: undefined;
    } | {
        message: string;
        department: {
            _id: Types.ObjectId;
            previousHead: Types.ObjectId;
            newHead: Types.ObjectId;
        };
        info?: undefined;
    }>;
    getDepartment(departmentId: string, employee: EmployeeDocument, hospital: HospitalDocument): Promise<{
        message: string;
        department: EnrichedDepartmentDoc;
    }>;
    getAllDepartments(hospital: HospitalDocument, employee: EmployeeDocument, page?: number, limit?: number): Promise<{
        message: string;
        date: {
            departments: any[];
            pagination: {
                total: number;
                page: number;
                limit: number;
                pages: number;
            };
        };
    }>;
}
