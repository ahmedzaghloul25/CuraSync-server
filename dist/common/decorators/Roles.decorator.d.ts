import { AllRoles } from 'common/types/roles';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: AllRoles[]) => import("@nestjs/common").CustomDecorator<string>;
