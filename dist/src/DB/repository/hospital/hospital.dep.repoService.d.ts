import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { HospitalDepartmentDocument } from "src/DB/schemas/hospital/hospital.department.schema";
export default class HospitalDepartmentRepoService extends DbRepoService<HospitalDepartmentDocument> {
    private readonly departmentModel;
    constructor(departmentModel: Model<HospitalDepartmentDocument>);
}
