import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "common/decorators/Roles.decorator";
import { AllRoles } from "common/types";
import { AuthenticationGuard } from "./authentication.guard";

@Injectable()
export class Authorization implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<AllRoles[]>(
      ROLES_KEY,
      context.getHandler()
      //   context.getClass(),
    );
    if (!requiredRoles) {
      return true;
    }
    const { employee } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => employee.occupation?.includes(role));
  }
}
