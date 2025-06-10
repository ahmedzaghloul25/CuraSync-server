import { AdminRoles, ExecutiveRoles, FinanceRoles, HRRoles } from "./admin.roles";
import { AlliedHealthRoles, DiagnosticRoles, NursingRoles, PharmacyRoles, PhysicianRoles } from "./medical.roles";
export * from "./medical.roles";
export * from "./admin.roles";
export * from "./allRoles";
export type AllRoles = PhysicianRoles | NursingRoles | AlliedHealthRoles | PharmacyRoles | DiagnosticRoles | AdminRoles | FinanceRoles | HRRoles | ExecutiveRoles;
