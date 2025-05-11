export declare enum JobCategoryTypes {
    OFFICER = "officer",
    MEDICAL = "medical"
}
export declare enum MedicalOccupations {
    GENERAL_PRACTITIONER = "General Practitioner",
    SURGEON = "Surgeon",
    CARDIOLOGIST = "Cardiologist",
    PEDIATRICIAN = "Pediatrician",
    ONCOLOGIST = "Oncologist",
    NEUROLOGIST = "Neurologist",
    RADIOLOGIST = "Radiologist",
    ANESTHESIOLOGIST = "Anesthesiologist",
    PSYCHIATRIST = "Psychiatrist",
    PATHOLOGIST = "Pathologist",
    EMERGENCY_PHYSICIAN = "Emergency Physician",
    REGISTERED_NURSE = "Registered Nurse",
    NURSE_PRACTITIONER = "Nurse Practitioner",
    CRITICAL_CARE_NURSE = "Critical Care Nurse",
    MIDWIFE = "Midwife",
    PHYSICIAN_ASSISTANT = "Physician Assistant",
    PHYSICAL_THERAPIST = "Physical Therapist",
    RESPIRATORY_THERAPIST = "Respiratory Therapist",
    OCCUPATIONAL_THERAPIST = "Occupational Therapist",
    SPEECH_LANGUAGE_PATHOLOGIST = "Speech-Language Pathologist",
    DIETITIAN = "Dietitian",
    PSYCHOLOGIST = "Psychologist",
    PHARMACIST = "Pharmacist",
    PHARMACY_TECHNICIAN = "Pharmacy Technician",
    RADIOLOGIC_TECHNOLOGIST = "Radiologic Technologist",
    LAB_TECHNICIAN = "Lab Technician",
    PHLEBOTOMIST = "Phlebotomist",
    MEDICAL_LAB_SCIENTIST = "Medical Lab Scientist",
    PARAMEDIC = "Paramedic",
    EMERGENCY_MEDICAL_TECHNICIAN = "Emergency Medical Technician",
    SURGICAL_TECHNOLOGIST = "Surgical Technologist",
    EKG_TECHNICIAN = "EKG Technician",
    DENTIST = "Dentist",
    OPTOMETRIST = "Optometrist"
}
export declare enum OfficerOccupations {
    HOSPITAL_ADMINISTRATOR = "Hospital Administrator",
    OFFICE_MANAGER = "Office Manager",
    UNIT_SECRETARY = "Unit Secretary",
    MEDICAL_SECRETARY = "Medical Secretary",
    FRONT_DESK_RECEPTIONIST = "Front Desk Receptionist",
    PATIENT_SERVICES_REPRESENTATIVE = "Patient Services Representative",
    BILLING_SPECIALIST = "Billing Specialist",
    INSURANCE_COORDINATOR = "Insurance Coordinator",
    ACCOUNTS_RECEIVABLE_CLERK = "Accounts Receivable Clerk",
    PAYROLL_COORDINATOR = "Payroll Coordinator",
    HOSPITAL_ACCOUNTANT = "Hospital Accountant",
    HR_MANAGER = "HR Manager",
    RECRUITMENT_COORDINATOR = "Recruitment Coordinator",
    BENEFITS_ADMINISTRATOR = "Benefits Administrator",
    TRAINING_COORDINATOR = "Training Coordinator",
    MEDICAL_RECORDS_CLERK = "Medical Records Clerk",
    HEALTH_INFORMATION_TECHNICIAN = "Health Information Technician",
    MEDICAL_CODING_SPECIALIST = "Medical Coding Specialist",
    TRANSCRIPTIONIST = "Transcriptionist",
    HEALTHCARE_IT_SPECIALIST = "Healthcare IT Specialist",
    SYSTEMS_ADMINISTRATOR = "Systems Administrator",
    CLINICAL_INFORMATICS_ANALYST = "Clinical Informatics Analyst",
    SUPPLY_CHAIN_COORDINATOR = "Supply Chain Coordinator",
    PURCHASING_AGENT = "Purchasing Agent",
    INVENTORY_CLERK = "Inventory Clerk",
    FACILITIES_COORDINATOR = "Facilities Coordinator",
    CHIEF_EXECUTIVE_OFFICER = "Chief Executive Officer (CEO)",
    CHIEF_FINANCIAL_OFFICER = "Chief Financial Officer (CFO)",
    CHIEF_OPERATING_OFFICER = "Chief Operating Officer (COO)",
    ADMISSIONS_COORDINATOR = "Admissions Coordinator",
    DISCHARGE_PLANNER = "Discharge Planner",
    PATIENT_NAVIGATOR = "Patient Navigator",
    QUALITY_ASSURANCE_COORDINATOR = "Quality Assurance Coordinator",
    COMPLIANCE_OFFICER = "Compliance Officer",
    RISK_MANAGER = "Risk Manager",
    PUBLIC_RELATIONS_SPECIALIST = "Public Relations Specialist",
    MARKETING_COORDINATOR = "Marketing Coordinator",
    COMMUNICATIONS_SPECIALIST = "Communications Specialist",
    VOLUNTEER_COORDINATOR = "Volunteer Coordinator",
    MEDICAL_INTERPRETER = "Medical Interpreter",
    TRANSLATION_SPECIALIST = "Translation Specialist"
}
export declare const AllOccupations: (MedicalOccupations | OfficerOccupations)[];
export declare enum OtpType {
    ACTIVATE = "activate",
    PASS_RESET = "passwordReset"
}
export declare enum RoleEnum {
    SUPER = "super",
    ADMIN = "admin",
    MEDICAL = "medical",
    OFFICER = "officer",
    PENDING = "pending"
}
export declare enum Departments {
    MEDICAL = "Medical Departments",
    SURGICAL = "Surgical Departments",
    DIAGNOSTIC = "Diagnostic Departments",
    CRITICAL_CARE = "Critical Care",
    MATERNAL_CHILD = "Maternal and Child Health",
    REHABILITATION = "Rehabilitation Services",
    SPECIALIZED_CLINICS = "Specialized Clinics",
    SUPPORT_SERVICES = "Medical Support Services",
    ADMINISTRATIVE = "Administrative",
    OPERATIONS = "Operational Services"
}
export declare enum MedicalUnits {
    INTERNAL_MEDICINE = "Internal Medicine",
    CARDIOLOGY = "Cardiology",
    NEUROLOGY = "Neurology",
    ONCOLOGY = "Oncology",
    GASTROENTEROLOGY = "Gastroenterology",
    PULMONOLOGY = "Pulmonology",
    ENDOCRINOLOGY = "Endocrinology",
    NEPHROLOGY = "Nephrology",
    HEMATOLOGY = "Hematology",
    INFECTIOUS_DISEASE = "Infectious Disease",
    RHEUMATOLOGY = "Rheumatology",
    GERIATRICS = "Geriatrics",
    DERMATOLOGY = "Dermatology",
    PSYCHIATRY = "Psychiatry"
}
export declare enum SurgicalUnits {
    GENERAL_SURGERY = "General Surgery",
    ORTHOPEDICS = "Orthopedics",
    NEUROSURGERY = "Neurosurgery",
    CARDIAC_SURGERY = "Cardiac Surgery",
    VASCULAR_SURGERY = "Vascular Surgery",
    PLASTIC_SURGERY = "Plastic Surgery",
    UROLOGY = "Urology",
    OPHTHALMOLOGY = "Ophthalmology",
    ENT = "Ear, Nose, and Throat",
    ANESTHESIOLOGY = "Anesthesiology",
    TRANSPLANT = "Transplant Surgery"
}
export declare enum DiagnosticUnits {
    RADIOLOGY = "Radiology",
    PATHOLOGY = "Pathology",
    LABORATORY = "Laboratory Services",
    NUCLEAR_MEDICINE = "Nuclear Medicine",
    ELECTRODIAGNOSTICS = "Electrodiagnostic Services"
}
export declare enum CriticalCareUnits {
    EMERGENCY = "Emergency Department",
    INTENSIVE_CARE = "Intensive Care Unit",
    CARDIAC_CARE = "Cardiac Care Unit",
    NEONATAL_ICU = "Neonatal Intensive Care",
    PEDIATRIC_ICU = "Pediatric Intensive Care",
    BURN_UNIT = "Burn Unit"
}
export declare enum MaternalAndChildUnits {
    OBSTETRICS = "Obstetrics",
    GYNECOLOGY = "Gynecology",
    PEDIATRICS = "Pediatrics",
    NEONATOLOGY = "Neonatology"
}
export declare enum RehabilitationUnits {
    PHYSICAL_THERAPY = "Physical Therapy",
    OCCUPATIONAL_THERAPY = "Occupational Therapy",
    SPEECH_THERAPY = "Speech Therapy",
    CARDIAC_REHAB = "Cardiac Rehabilitation"
}
export declare enum SpecializedClinicsUnits {
    PAIN_MANAGEMENT = "Pain Management",
    SLEEP_MEDICINE = "Sleep Medicine",
    WOUND_CARE = "Wound Care",
    PALLIATIVE_CARE = "Palliative Care"
}
export declare enum MedicalSupportUnits {
    PHARMACY = "Pharmacy",
    NUTRITION = "Nutrition and Dietetics",
    RESPIRATORY_THERAPY = "Respiratory Therapy",
    SOCIAL_SERVICES = "Social Services",
    CASE_MANAGEMENT = "Case Management",
    TELEHEALTH = "Telehealth Services"
}
export declare enum AdministrativeUnits {
    ADMINISTRATION = "Administration",
    HUMAN_RESOURCES = "Human Resources",
    FINANCE = "Finance",
    BILLING = "Billing and Claims",
    MEDICAL_RECORDS = "Medical Records",
    IT = "Information Technology",
    LEGAL = "Legal Affairs",
    PUBLIC_RELATIONS = "Public Relations",
    COMPLIANCE = "Compliance and Ethics",
    QUALITY_ASSURANCE = "Quality Assurance",
    RISK_MANAGEMENT = "Risk Management",
    PATIENT_ADVOCACY = "Patient Advocacy",
    ADMISSIONS = "Admissions"
}
export declare enum OperationalServiceUnits {
    FACILITIES = "Facilities Management",
    SECURITY = "Security",
    MAINTENANCE = "Maintenance",
    HOUSEKEEPING = "Housekeeping",
    FOOD_SERVICES = "Food Services",
    PROCUREMENT = "Procurement and Supply Chain",
    VOLUNTEER_SERVICES = "Volunteer Services",
    RESEARCH = "Research and Development",
    EDUCATION = "Medical Education",
    OPERATIONS = "Operations"
}
export declare const AllUnits: (OperationalServiceUnits | AdministrativeUnits | MedicalSupportUnits | SpecializedClinicsUnits | RehabilitationUnits | MaternalAndChildUnits | CriticalCareUnits | DiagnosticUnits | SurgicalUnits | MedicalUnits)[];
export declare enum FileStatus {
    ACTIVE = "active",
    ARCHIVED = "archived"
}
export declare enum ServiceRecordTypes {
    PENDING = "pending",
    ASSIGNED = "assigned",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
    CLOSED = "closed"
}
export declare enum BillingStatusType {
    PENDING = "pending",
    PAYED = "payed"
}
export declare enum TransferStatusType {
    PENDING = "pending",
    CANCELLED = "cancelled",
    APPROVED = "approved",
    COMPLETED = "completed"
}
export declare enum ServiceTypes {
    MEDICATION = "medication",
    LABORATORY = "laboratory",
    SUPPLIES = "supplies",
    DISPOSABLES = "disposables",
    EQUIPMENT_USE = "equipmentUse",
    CONSULTATION = "consultation",
    PHYSICIAN_FEES = "physicianFees",
    SPECIALIST_FEES = "specialistFees",
    ROOM_FEES = "roomFees",
    ICU = "icu",
    PROCEDURE = "procedure",
    SURGERY = "surgery",
    ANESTHESIA = "anesthesia",
    RADIOLOGY = "radiology",
    IMAGING = "imaging",
    PHYSICAL_THERAPY = "physicalTherapy",
    OCCUPATIONAL_THERAPY = "occupationalTherapy",
    RESPIRATORY_THERAPY = "respiratoryTherapy",
    EMERGENCY = "emergency",
    AMBULANCE = "ambulance",
    NURSING = "nursing",
    FACILITY_FEE = "facilityFee",
    ADMINISTRATIVE = "administrative"
}
