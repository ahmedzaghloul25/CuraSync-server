import { DbRepoService } from "../db.repo.service";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Model } from "mongoose";
import { Hashing } from "common/services";
export declare class EmployeeRepoService extends DbRepoService<EmployeeDocument> {
    private readonly employeeModel;
    private readonly hashing;
    constructor(employeeModel: Model<EmployeeDocument>, hashing: Hashing);
}
