
import { SetMetadata } from '@nestjs/common';
import { AllRoles } from 'common/types';

 
export const ROLES_KEY = 'roles';
export const Roles = (...roles: AllRoles[]) => SetMetadata(ROLES_KEY, roles);
