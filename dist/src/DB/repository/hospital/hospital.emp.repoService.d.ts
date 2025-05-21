import { DbRepoService } from "../db.repo.service";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Model } from "mongoose";
export declare class EmployeeRepoService extends DbRepoService<EmployeeDocument> {
    private readonly employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
}
