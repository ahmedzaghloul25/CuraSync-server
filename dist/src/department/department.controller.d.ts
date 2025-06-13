import { DepartmentService } from "./department.service";
import { AddDepartmentDto, UpdateDepartmentDto } from "./DTO";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    addDepartment(body: AddDepartmentDto, employee: EmployeeDocument, hospital: HospitalDocument): Promise<{
        message: string;
        department: {
            name: string;
            catalogId: import("mongoose").Types.ObjectId;
            head: import("mongoose").Types.ObjectId;
            hospital: import("mongoose").Types.ObjectId;
            createdBy: import("mongoose").Types.ObjectId;
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateDepartment(departmentId: string, body: UpdateDepartmentDto, employee: EmployeeDocument, hospital: HospitalDocument): Promise<{
        message: string;
        info: string;
        department?: undefined;
    } | {
        message: string;
        department: {
            _id: import("mongoose").Types.ObjectId;
            previousHead: import("mongoose").Types.ObjectId;
            newHead: import("mongoose").Types.ObjectId;
        };
        info?: undefined;
    }>;
    getDepartment(departmentId: string, employee: EmployeeDocument, hospital: HospitalDocument): Promise<{
        message: string;
        department: import("../../common/types").EnrichedDepartmentDoc;
    }>;
    getAllDepartments(page: number | undefined, limit: number | undefined, employee: EmployeeDocument, hospital: HospitalDocument): Promise<{
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
