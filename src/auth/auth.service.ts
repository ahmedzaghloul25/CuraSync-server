import { Injectable } from '@nestjs/common';
import EmployeeRepoService from 'src/DB/repository/employee.repo.service';
import { signupDto } from './DTO/authDto';

@Injectable()
export class AuthService {
    constructor(private readonly employeeRepoService : EmployeeRepoService){}

    async signup(body : signupDto){
        const employee = await this.employeeRepoService.create({
            ...body,
            isConfirmed : false
        })
        return {message : 'success', employee}
    }
}
