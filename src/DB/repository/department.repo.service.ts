import { Injectable } from "@nestjs/common";
import { DbRepoService } from "./db.repo.service";
import { Department, DepartmentDocument } from "../schemas/department.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export default class DepartmentRepoService extends DbRepoService<DepartmentDocument> {
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<DepartmentDocument>
  ) {
    super(departmentModel);
  }
}
