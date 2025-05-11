"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTypes = exports.TransferStatusType = exports.BillingStatusType = exports.ServiceRecordTypes = exports.FileStatus = exports.AllUnits = exports.OperationalServiceUnits = exports.AdministrativeUnits = exports.MedicalSupportUnits = exports.SpecializedClinicsUnits = exports.RehabilitationUnits = exports.MaternalAndChildUnits = exports.CriticalCareUnits = exports.DiagnosticUnits = exports.SurgicalUnits = exports.MedicalUnits = exports.Departments = exports.RoleEnum = exports.OtpType = exports.AllOccupations = exports.OfficerOccupations = exports.MedicalOccupations = exports.JobCategoryTypes = void 0;
var JobCategoryTypes;
(function (JobCategoryTypes) {
    JobCategoryTypes["OFFICER"] = "officer";
    JobCategoryTypes["MEDICAL"] = "medical";
})(JobCategoryTypes || (exports.JobCategoryTypes = JobCategoryTypes = {}));
var MedicalOccupations;
(function (MedicalOccupations) {
    MedicalOccupations["GENERAL_PRACTITIONER"] = "General Practitioner";
    MedicalOccupations["SURGEON"] = "Surgeon";
    MedicalOccupations["CARDIOLOGIST"] = "Cardiologist";
    MedicalOccupations["PEDIATRICIAN"] = "Pediatrician";
    MedicalOccupations["ONCOLOGIST"] = "Oncologist";
    MedicalOccupations["NEUROLOGIST"] = "Neurologist";
    MedicalOccupations["RADIOLOGIST"] = "Radiologist";
    MedicalOccupations["ANESTHESIOLOGIST"] = "Anesthesiologist";
    MedicalOccupations["PSYCHIATRIST"] = "Psychiatrist";
    MedicalOccupations["PATHOLOGIST"] = "Pathologist";
    MedicalOccupations["EMERGENCY_PHYSICIAN"] = "Emergency Physician";
    MedicalOccupations["REGISTERED_NURSE"] = "Registered Nurse";
    MedicalOccupations["NURSE_PRACTITIONER"] = "Nurse Practitioner";
    MedicalOccupations["CRITICAL_CARE_NURSE"] = "Critical Care Nurse";
    MedicalOccupations["MIDWIFE"] = "Midwife";
    MedicalOccupations["PHYSICIAN_ASSISTANT"] = "Physician Assistant";
    MedicalOccupations["PHYSICAL_THERAPIST"] = "Physical Therapist";
    MedicalOccupations["RESPIRATORY_THERAPIST"] = "Respiratory Therapist";
    MedicalOccupations["OCCUPATIONAL_THERAPIST"] = "Occupational Therapist";
    MedicalOccupations["SPEECH_LANGUAGE_PATHOLOGIST"] = "Speech-Language Pathologist";
    MedicalOccupations["DIETITIAN"] = "Dietitian";
    MedicalOccupations["PSYCHOLOGIST"] = "Psychologist";
    MedicalOccupations["PHARMACIST"] = "Pharmacist";
    MedicalOccupations["PHARMACY_TECHNICIAN"] = "Pharmacy Technician";
    MedicalOccupations["RADIOLOGIC_TECHNOLOGIST"] = "Radiologic Technologist";
    MedicalOccupations["LAB_TECHNICIAN"] = "Lab Technician";
    MedicalOccupations["PHLEBOTOMIST"] = "Phlebotomist";
    MedicalOccupations["MEDICAL_LAB_SCIENTIST"] = "Medical Lab Scientist";
    MedicalOccupations["PARAMEDIC"] = "Paramedic";
    MedicalOccupations["EMERGENCY_MEDICAL_TECHNICIAN"] = "Emergency Medical Technician";
    MedicalOccupations["SURGICAL_TECHNOLOGIST"] = "Surgical Technologist";
    MedicalOccupations["EKG_TECHNICIAN"] = "EKG Technician";
    MedicalOccupations["DENTIST"] = "Dentist";
    MedicalOccupations["OPTOMETRIST"] = "Optometrist";
})(MedicalOccupations || (exports.MedicalOccupations = MedicalOccupations = {}));
var OfficerOccupations;
(function (OfficerOccupations) {
    OfficerOccupations["HOSPITAL_ADMINISTRATOR"] = "Hospital Administrator";
    OfficerOccupations["OFFICE_MANAGER"] = "Office Manager";
    OfficerOccupations["UNIT_SECRETARY"] = "Unit Secretary";
    OfficerOccupations["MEDICAL_SECRETARY"] = "Medical Secretary";
    OfficerOccupations["FRONT_DESK_RECEPTIONIST"] = "Front Desk Receptionist";
    OfficerOccupations["PATIENT_SERVICES_REPRESENTATIVE"] = "Patient Services Representative";
    OfficerOccupations["BILLING_SPECIALIST"] = "Billing Specialist";
    OfficerOccupations["INSURANCE_COORDINATOR"] = "Insurance Coordinator";
    OfficerOccupations["ACCOUNTS_RECEIVABLE_CLERK"] = "Accounts Receivable Clerk";
    OfficerOccupations["PAYROLL_COORDINATOR"] = "Payroll Coordinator";
    OfficerOccupations["HOSPITAL_ACCOUNTANT"] = "Hospital Accountant";
    OfficerOccupations["HR_MANAGER"] = "HR Manager";
    OfficerOccupations["RECRUITMENT_COORDINATOR"] = "Recruitment Coordinator";
    OfficerOccupations["BENEFITS_ADMINISTRATOR"] = "Benefits Administrator";
    OfficerOccupations["TRAINING_COORDINATOR"] = "Training Coordinator";
    OfficerOccupations["MEDICAL_RECORDS_CLERK"] = "Medical Records Clerk";
    OfficerOccupations["HEALTH_INFORMATION_TECHNICIAN"] = "Health Information Technician";
    OfficerOccupations["MEDICAL_CODING_SPECIALIST"] = "Medical Coding Specialist";
    OfficerOccupations["TRANSCRIPTIONIST"] = "Transcriptionist";
    OfficerOccupations["HEALTHCARE_IT_SPECIALIST"] = "Healthcare IT Specialist";
    OfficerOccupations["SYSTEMS_ADMINISTRATOR"] = "Systems Administrator";
    OfficerOccupations["CLINICAL_INFORMATICS_ANALYST"] = "Clinical Informatics Analyst";
    OfficerOccupations["SUPPLY_CHAIN_COORDINATOR"] = "Supply Chain Coordinator";
    OfficerOccupations["PURCHASING_AGENT"] = "Purchasing Agent";
    OfficerOccupations["INVENTORY_CLERK"] = "Inventory Clerk";
    OfficerOccupations["FACILITIES_COORDINATOR"] = "Facilities Coordinator";
    OfficerOccupations["CHIEF_EXECUTIVE_OFFICER"] = "Chief Executive Officer (CEO)";
    OfficerOccupations["CHIEF_FINANCIAL_OFFICER"] = "Chief Financial Officer (CFO)";
    OfficerOccupations["CHIEF_OPERATING_OFFICER"] = "Chief Operating Officer (COO)";
    OfficerOccupations["ADMISSIONS_COORDINATOR"] = "Admissions Coordinator";
    OfficerOccupations["DISCHARGE_PLANNER"] = "Discharge Planner";
    OfficerOccupations["PATIENT_NAVIGATOR"] = "Patient Navigator";
    OfficerOccupations["QUALITY_ASSURANCE_COORDINATOR"] = "Quality Assurance Coordinator";
    OfficerOccupations["COMPLIANCE_OFFICER"] = "Compliance Officer";
    OfficerOccupations["RISK_MANAGER"] = "Risk Manager";
    OfficerOccupations["PUBLIC_RELATIONS_SPECIALIST"] = "Public Relations Specialist";
    OfficerOccupations["MARKETING_COORDINATOR"] = "Marketing Coordinator";
    OfficerOccupations["COMMUNICATIONS_SPECIALIST"] = "Communications Specialist";
    OfficerOccupations["VOLUNTEER_COORDINATOR"] = "Volunteer Coordinator";
    OfficerOccupations["MEDICAL_INTERPRETER"] = "Medical Interpreter";
    OfficerOccupations["TRANSLATION_SPECIALIST"] = "Translation Specialist";
})(OfficerOccupations || (exports.OfficerOccupations = OfficerOccupations = {}));
exports.AllOccupations = [
    ...Object.values(MedicalOccupations),
    ...Object.values(OfficerOccupations),
];
var OtpType;
(function (OtpType) {
    OtpType["ACTIVATE"] = "activate";
    OtpType["PASS_RESET"] = "passwordReset";
})(OtpType || (exports.OtpType = OtpType = {}));
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["SUPER"] = "super";
    RoleEnum["ADMIN"] = "admin";
    RoleEnum["MEDICAL"] = "medical";
    RoleEnum["OFFICER"] = "officer";
    RoleEnum["PENDING"] = "pending";
})(RoleEnum || (exports.RoleEnum = RoleEnum = {}));
var Departments;
(function (Departments) {
    Departments["MEDICAL"] = "Medical Departments";
    Departments["SURGICAL"] = "Surgical Departments";
    Departments["DIAGNOSTIC"] = "Diagnostic Departments";
    Departments["CRITICAL_CARE"] = "Critical Care";
    Departments["MATERNAL_CHILD"] = "Maternal and Child Health";
    Departments["REHABILITATION"] = "Rehabilitation Services";
    Departments["SPECIALIZED_CLINICS"] = "Specialized Clinics";
    Departments["SUPPORT_SERVICES"] = "Medical Support Services";
    Departments["ADMINISTRATIVE"] = "Administrative";
    Departments["OPERATIONS"] = "Operational Services";
})(Departments || (exports.Departments = Departments = {}));
var MedicalUnits;
(function (MedicalUnits) {
    MedicalUnits["INTERNAL_MEDICINE"] = "Internal Medicine";
    MedicalUnits["CARDIOLOGY"] = "Cardiology";
    MedicalUnits["NEUROLOGY"] = "Neurology";
    MedicalUnits["ONCOLOGY"] = "Oncology";
    MedicalUnits["GASTROENTEROLOGY"] = "Gastroenterology";
    MedicalUnits["PULMONOLOGY"] = "Pulmonology";
    MedicalUnits["ENDOCRINOLOGY"] = "Endocrinology";
    MedicalUnits["NEPHROLOGY"] = "Nephrology";
    MedicalUnits["HEMATOLOGY"] = "Hematology";
    MedicalUnits["INFECTIOUS_DISEASE"] = "Infectious Disease";
    MedicalUnits["RHEUMATOLOGY"] = "Rheumatology";
    MedicalUnits["GERIATRICS"] = "Geriatrics";
    MedicalUnits["DERMATOLOGY"] = "Dermatology";
    MedicalUnits["PSYCHIATRY"] = "Psychiatry";
})(MedicalUnits || (exports.MedicalUnits = MedicalUnits = {}));
var SurgicalUnits;
(function (SurgicalUnits) {
    SurgicalUnits["GENERAL_SURGERY"] = "General Surgery";
    SurgicalUnits["ORTHOPEDICS"] = "Orthopedics";
    SurgicalUnits["NEUROSURGERY"] = "Neurosurgery";
    SurgicalUnits["CARDIAC_SURGERY"] = "Cardiac Surgery";
    SurgicalUnits["VASCULAR_SURGERY"] = "Vascular Surgery";
    SurgicalUnits["PLASTIC_SURGERY"] = "Plastic Surgery";
    SurgicalUnits["UROLOGY"] = "Urology";
    SurgicalUnits["OPHTHALMOLOGY"] = "Ophthalmology";
    SurgicalUnits["ENT"] = "Ear, Nose, and Throat";
    SurgicalUnits["ANESTHESIOLOGY"] = "Anesthesiology";
    SurgicalUnits["TRANSPLANT"] = "Transplant Surgery";
})(SurgicalUnits || (exports.SurgicalUnits = SurgicalUnits = {}));
var DiagnosticUnits;
(function (DiagnosticUnits) {
    DiagnosticUnits["RADIOLOGY"] = "Radiology";
    DiagnosticUnits["PATHOLOGY"] = "Pathology";
    DiagnosticUnits["LABORATORY"] = "Laboratory Services";
    DiagnosticUnits["NUCLEAR_MEDICINE"] = "Nuclear Medicine";
    DiagnosticUnits["ELECTRODIAGNOSTICS"] = "Electrodiagnostic Services";
})(DiagnosticUnits || (exports.DiagnosticUnits = DiagnosticUnits = {}));
var CriticalCareUnits;
(function (CriticalCareUnits) {
    CriticalCareUnits["EMERGENCY"] = "Emergency Department";
    CriticalCareUnits["INTENSIVE_CARE"] = "Intensive Care Unit";
    CriticalCareUnits["CARDIAC_CARE"] = "Cardiac Care Unit";
    CriticalCareUnits["NEONATAL_ICU"] = "Neonatal Intensive Care";
    CriticalCareUnits["PEDIATRIC_ICU"] = "Pediatric Intensive Care";
    CriticalCareUnits["BURN_UNIT"] = "Burn Unit";
})(CriticalCareUnits || (exports.CriticalCareUnits = CriticalCareUnits = {}));
var MaternalAndChildUnits;
(function (MaternalAndChildUnits) {
    MaternalAndChildUnits["OBSTETRICS"] = "Obstetrics";
    MaternalAndChildUnits["GYNECOLOGY"] = "Gynecology";
    MaternalAndChildUnits["PEDIATRICS"] = "Pediatrics";
    MaternalAndChildUnits["NEONATOLOGY"] = "Neonatology";
})(MaternalAndChildUnits || (exports.MaternalAndChildUnits = MaternalAndChildUnits = {}));
var RehabilitationUnits;
(function (RehabilitationUnits) {
    RehabilitationUnits["PHYSICAL_THERAPY"] = "Physical Therapy";
    RehabilitationUnits["OCCUPATIONAL_THERAPY"] = "Occupational Therapy";
    RehabilitationUnits["SPEECH_THERAPY"] = "Speech Therapy";
    RehabilitationUnits["CARDIAC_REHAB"] = "Cardiac Rehabilitation";
})(RehabilitationUnits || (exports.RehabilitationUnits = RehabilitationUnits = {}));
var SpecializedClinicsUnits;
(function (SpecializedClinicsUnits) {
    SpecializedClinicsUnits["PAIN_MANAGEMENT"] = "Pain Management";
    SpecializedClinicsUnits["SLEEP_MEDICINE"] = "Sleep Medicine";
    SpecializedClinicsUnits["WOUND_CARE"] = "Wound Care";
    SpecializedClinicsUnits["PALLIATIVE_CARE"] = "Palliative Care";
})(SpecializedClinicsUnits || (exports.SpecializedClinicsUnits = SpecializedClinicsUnits = {}));
var MedicalSupportUnits;
(function (MedicalSupportUnits) {
    MedicalSupportUnits["PHARMACY"] = "Pharmacy";
    MedicalSupportUnits["NUTRITION"] = "Nutrition and Dietetics";
    MedicalSupportUnits["RESPIRATORY_THERAPY"] = "Respiratory Therapy";
    MedicalSupportUnits["SOCIAL_SERVICES"] = "Social Services";
    MedicalSupportUnits["CASE_MANAGEMENT"] = "Case Management";
    MedicalSupportUnits["TELEHEALTH"] = "Telehealth Services";
})(MedicalSupportUnits || (exports.MedicalSupportUnits = MedicalSupportUnits = {}));
var AdministrativeUnits;
(function (AdministrativeUnits) {
    AdministrativeUnits["ADMINISTRATION"] = "Administration";
    AdministrativeUnits["HUMAN_RESOURCES"] = "Human Resources";
    AdministrativeUnits["FINANCE"] = "Finance";
    AdministrativeUnits["BILLING"] = "Billing and Claims";
    AdministrativeUnits["MEDICAL_RECORDS"] = "Medical Records";
    AdministrativeUnits["IT"] = "Information Technology";
    AdministrativeUnits["LEGAL"] = "Legal Affairs";
    AdministrativeUnits["PUBLIC_RELATIONS"] = "Public Relations";
    AdministrativeUnits["COMPLIANCE"] = "Compliance and Ethics";
    AdministrativeUnits["QUALITY_ASSURANCE"] = "Quality Assurance";
    AdministrativeUnits["RISK_MANAGEMENT"] = "Risk Management";
    AdministrativeUnits["PATIENT_ADVOCACY"] = "Patient Advocacy";
    AdministrativeUnits["ADMISSIONS"] = "Admissions";
})(AdministrativeUnits || (exports.AdministrativeUnits = AdministrativeUnits = {}));
var OperationalServiceUnits;
(function (OperationalServiceUnits) {
    OperationalServiceUnits["FACILITIES"] = "Facilities Management";
    OperationalServiceUnits["SECURITY"] = "Security";
    OperationalServiceUnits["MAINTENANCE"] = "Maintenance";
    OperationalServiceUnits["HOUSEKEEPING"] = "Housekeeping";
    OperationalServiceUnits["FOOD_SERVICES"] = "Food Services";
    OperationalServiceUnits["PROCUREMENT"] = "Procurement and Supply Chain";
    OperationalServiceUnits["VOLUNTEER_SERVICES"] = "Volunteer Services";
    OperationalServiceUnits["RESEARCH"] = "Research and Development";
    OperationalServiceUnits["EDUCATION"] = "Medical Education";
    OperationalServiceUnits["OPERATIONS"] = "Operations";
})(OperationalServiceUnits || (exports.OperationalServiceUnits = OperationalServiceUnits = {}));
exports.AllUnits = [
    ...Object.values(OperationalServiceUnits),
    ...Object.values(AdministrativeUnits),
    ...Object.values(MedicalSupportUnits),
    ...Object.values(SpecializedClinicsUnits),
    ...Object.values(RehabilitationUnits),
    ...Object.values(MaternalAndChildUnits),
    ...Object.values(CriticalCareUnits),
    ...Object.values(DiagnosticUnits),
    ...Object.values(SurgicalUnits),
    ...Object.values(MedicalUnits),
];
var FileStatus;
(function (FileStatus) {
    FileStatus["ACTIVE"] = "active";
    FileStatus["ARCHIVED"] = "archived";
})(FileStatus || (exports.FileStatus = FileStatus = {}));
var ServiceRecordTypes;
(function (ServiceRecordTypes) {
    ServiceRecordTypes["PENDING"] = "pending";
    ServiceRecordTypes["ASSIGNED"] = "assigned";
    ServiceRecordTypes["CANCELLED"] = "cancelled";
    ServiceRecordTypes["COMPLETED"] = "completed";
    ServiceRecordTypes["CLOSED"] = "closed";
})(ServiceRecordTypes || (exports.ServiceRecordTypes = ServiceRecordTypes = {}));
var BillingStatusType;
(function (BillingStatusType) {
    BillingStatusType["PENDING"] = "pending";
    BillingStatusType["PAYED"] = "payed";
})(BillingStatusType || (exports.BillingStatusType = BillingStatusType = {}));
var TransferStatusType;
(function (TransferStatusType) {
    TransferStatusType["PENDING"] = "pending";
    TransferStatusType["CANCELLED"] = "cancelled";
    TransferStatusType["APPROVED"] = "approved";
    TransferStatusType["COMPLETED"] = "completed";
})(TransferStatusType || (exports.TransferStatusType = TransferStatusType = {}));
var ServiceTypes;
(function (ServiceTypes) {
    ServiceTypes["MEDICATION"] = "medication";
    ServiceTypes["LABORATORY"] = "laboratory";
    ServiceTypes["SUPPLIES"] = "supplies";
    ServiceTypes["DISPOSABLES"] = "disposables";
    ServiceTypes["EQUIPMENT_USE"] = "equipmentUse";
    ServiceTypes["CONSULTATION"] = "consultation";
    ServiceTypes["PHYSICIAN_FEES"] = "physicianFees";
    ServiceTypes["SPECIALIST_FEES"] = "specialistFees";
    ServiceTypes["ROOM_FEES"] = "roomFees";
    ServiceTypes["ICU"] = "icu";
    ServiceTypes["PROCEDURE"] = "procedure";
    ServiceTypes["SURGERY"] = "surgery";
    ServiceTypes["ANESTHESIA"] = "anesthesia";
    ServiceTypes["RADIOLOGY"] = "radiology";
    ServiceTypes["IMAGING"] = "imaging";
    ServiceTypes["PHYSICAL_THERAPY"] = "physicalTherapy";
    ServiceTypes["OCCUPATIONAL_THERAPY"] = "occupationalTherapy";
    ServiceTypes["RESPIRATORY_THERAPY"] = "respiratoryTherapy";
    ServiceTypes["EMERGENCY"] = "emergency";
    ServiceTypes["AMBULANCE"] = "ambulance";
    ServiceTypes["NURSING"] = "nursing";
    ServiceTypes["FACILITY_FEE"] = "facilityFee";
    ServiceTypes["ADMINISTRATIVE"] = "administrative";
})(ServiceTypes || (exports.ServiceTypes = ServiceTypes = {}));
//# sourceMappingURL=types.js.map