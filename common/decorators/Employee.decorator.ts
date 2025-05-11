import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const Employee = createParamDecorator(
    (data : any, context : ExecutionContext)=>{
        const request = context.switchToHttp().getRequest()
        const {employee} = request
        return employee
    }
)