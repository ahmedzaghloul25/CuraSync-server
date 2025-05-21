import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  HospitalDepartment,
  HospitalDepartmentDocument,
} from "src/DB/schemas/hospital/hospital.department.schema";

@Injectable()
export default class HospitalDepartmentRepoService extends DbRepoService<HospitalDepartmentDocument> {
  constructor(
    @InjectModel(
      HospitalDepartment.name,
      _Types.TYPES.connectionNameString.HOSPITAL
    )
    private readonly departmentModel: Model<HospitalDepartmentDocument>
  ) {
    super(departmentModel);
  }
}
