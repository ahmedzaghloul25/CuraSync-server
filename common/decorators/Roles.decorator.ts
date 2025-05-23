
import { SetMetadata } from '@nestjs/common';
import { _Types } from 'common';

 
export const ROLES_KEY = 'roles';
export const Roles = (...roles: _Types.AllRoles[]) => SetMetadata(ROLES_KEY, roles);
