import {
  AdminRoles,
  ExecutiveRoles,
  FinanceRoles,
  HRRoles,
} from "./admin.roles";
import {
  AlliedHealthRoles,
  DiagnosticRoles,
  NursingRoles,
  PharmacyRoles,
  PhysicianRoles,
} from "./medical.roles";

export const All_Roles = [
  ...Object.values(PhysicianRoles),
  ...Object.values(NursingRoles),
  ...Object.values(AlliedHealthRoles),
  ...Object.values(PharmacyRoles),
  ...Object.values(DiagnosticRoles),
  ...Object.values(AdminRoles),
  ...Object.values(FinanceRoles),
  ...Object.values(HRRoles),
  ...Object.values(ExecutiveRoles),
]
  .flat()
  .filter((role) => role !== AdminRoles.HOSPITAL_ADMINISTRATOR);
