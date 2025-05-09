import { InjectModel } from "@nestjs/mongoose";
import { Employee, EmployeeDocument } from "../schemas/employee.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";


@Injectable()
export default class EmployeeRepoService extends DbRepoService<EmployeeDocument> {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>
  ) {
    super(employeeModel);
  }
}
