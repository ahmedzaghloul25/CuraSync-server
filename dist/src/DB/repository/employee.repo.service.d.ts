import { EmployeeDocument } from "../schemas/employee.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
export default class EmployeeRepoService extends DbRepoService<EmployeeDocument> {
    private readonly employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
}
