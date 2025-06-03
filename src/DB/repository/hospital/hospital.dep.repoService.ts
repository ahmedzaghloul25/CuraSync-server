import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  HospitalDepartment,
  HospitalDepartmentDocument,
} from "src/DB/schemas/hospital/hospital.department.schema";
import { TYPES } from "common/types";

@Injectable()
export default class HospitalDepartmentRepoService extends DbRepoService<HospitalDepartmentDocument> {
  constructor(
    @InjectModel(
      HospitalDepartment.name,
      TYPES.connectionNameString.HOSPITAL
    )
    private readonly departmentModel: Model<HospitalDepartmentDocument>
  ) {
    super(departmentModel);
  }
}
