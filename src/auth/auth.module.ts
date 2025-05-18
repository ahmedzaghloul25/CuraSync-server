import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmployeeModule } from 'src/DB/schemas/hospital/hospital.employee.schema';
// import EmployeeRepoService from 'src/DB/repository/employee.repo.service';
import { DbRepoService } from 'src/DB/repository/db.repo.service';

@Module({
  imports : [EmployeeModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
