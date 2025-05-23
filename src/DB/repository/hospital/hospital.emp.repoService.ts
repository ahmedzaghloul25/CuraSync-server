import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { Employee, EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";

@Injectable()
export class EmployeeRepoService extends DbRepoService<EmployeeDocument> {
  constructor(
    @InjectModel(Employee.name, _Types.TYPES.connectionNameString.HOSPITAL)
    private readonly employeeModel: Model<EmployeeDocument>
  ) {
    super(employeeModel);
  }
}
