import { ConflictException, Injectable } from "@nestjs/common";
// import EmployeeRepoService from "src/DB/repository/employee.repo.service";
import { signupDto } from "./DTO/authDto";

@Injectable()
export class AuthService {
  // constructor(private readonly employeeRepoService) {}

  // async signup(body: signupDto) {
  //   const userCheck = await this.employeeRepoService.findOne({
  //     email: body.email,
  //   });
  //   if (userCheck) {
  //     throw new ConflictException("Email already registered");
  //   }
  //   const employee = await this.employeeRepoService.create({
  //     ...body,
  //   });
  //   return { message: "success", employee };
  // }
}
