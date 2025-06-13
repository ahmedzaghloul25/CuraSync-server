import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { Employee, EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Hashing } from "common/services";
import { connectionNameString } from "common/types";

@Injectable()
export class EmployeeRepoService extends DbRepoService<EmployeeDocument> {
  constructor(
    @InjectModel(Employee.name, connectionNameString.HOSPITAL)
    private readonly employeeModel: Model<EmployeeDocument>,
    private readonly hashing: Hashing
  ) {
    super(employeeModel);
    const that = this;
    employeeModel.schema.pre("save", function (next) {
      this.password = that.hashing.createHash(this.password);
      next();
    });
  }

}
