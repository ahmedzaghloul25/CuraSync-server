import { DbRepoService } from "./db.repo.service";
import { DepartmentDocument } from "../schemas/department.schema";
import { Model } from "mongoose";
export default class DepartmentRepoService extends DbRepoService<DepartmentDocument> {
    private readonly departmentModel;
    constructor(departmentModel: Model<DepartmentDocument>);
}
