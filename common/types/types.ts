import { Types } from "mongoose";

export enum OtpType {
  CONFIRM_MAIL = "Confirm Email",
  PASS_RESET = "Reset Password",
}

export type TokenPayload = {
  _id: Types.ObjectId;
  occupation: string;
};

// export enum RoleEnum {
//   OFFICER = "Officer",
//   MEDICAL = "Medical",
// }

export enum connectionNameString {
  CATALOG = "catalog",
  HOSPITAL = "hospital",
  SUPER = "super",
}

export enum ImagingTypes {
  X_RAY = "x-ray",
  CT = "ct",
  MRI = "mri",
  ULTRASOUND = "ultrasound",
  NUCLEAR = "nuclear",
  FLUOROSCOPY = "fluoroscopy",
  MAMMOGRAPHY = "mammography",
  ANGIOGRAPHY = "angiography",
  PET = "pet",
  DEXA = "dexa",
  OTHER = "other",
}

export enum ImagingBodyRegions {
  BRAIN = "brain",
  CHEST = "chest",
  ABDOMEN = "abdomen",
  PELVIS = "pelvis",
  MUSCULOSKELETAL = "musculoskeletal",
  SPINE = "spine",
  CARDIAC = "cardiac",
  VASCULAR = "vascular",
  PEDIATRIC = "pediatric",
  OBSTETRIC = "obstetric",
  MULTIPLE = "multiple",
  OTHER = "other",
}
export enum MedicineUnits {
  TABLET = "tablet",
  CAPSULE = "capsule",
  TUBE = "tube",
  AMPOULE = "ampoule",
  VIAL = "vial",
  BOTTLE = "bottle",
  SOLUTION = "solution",
  SACHET = "sachet",
  SYRINGE = "syringe",
  SPRAY = "spray",
  PATCH = "patch",
  DROPPER = "dropper",
  SUPPOSITORY = "suppository",
  OTHER = "other",
}
export enum TransactionTypes {
  PROCUREMENT = "procurement",
  DISPENSING = "dispensing",
  RETURN = "return",
}

export enum InventoryItemTypes {
  MEDICINE = "medicine",
  LABORATORY = "department",
  DISPOSABLE = "disposable",
  IMAGING = "imaging",
}
export enum MedicationForm {
  // Oral Forms
  TABLET = "tablet",
  CAPSULE = "capsule",
  CAPSULE_HARD = "hard capsule",
  CAPSULE_SOFT = "soft capsule",
  PILL = "pill",
  LOZENGE = "lozenge",
  TROCHE = "troche",
  SYRUP = "syrup",
  SUSPENSION_ORAL = "oral suspension",
  ELIXIR = "elixir",
  SOLUTION_ORAL = "oral solution",
  POWDER_ORAL = "oral powder",
  GRANULES = "granules",
  SPRINKLES = "sprinkles",
  TABLET_CHEWABLE = "chewable tablet",
  TABLET_ORALLY_DISINTEGRATING = "orally disintegrating tablet",
  TABLET_SUBLINGUAL = "sublingual tablet",
  TABLET_BUCCAL = "buccal tablet",
  // Topical Forms
  CREAM = "cream",
  OINTMENT = "ointment",
  GEL = "gel",
  JELLY = "jelly",
  LOTION = "lotion",
  PASTE = "paste",
  FOAM = "foam",
  PATCH_TRANSDERMAL = "transdermal patch",
  PLASTER = "plaster",
  // Injectable Forms
  SOLUTION_INJECTABLE = "injectable solution",
  SUSPENSION_INJECTABLE = "injectable suspension",
  POWDER_FOR_INJECTION = "powder for injection",
  IMPLANT = "implant",
  // Inhalation Forms
  INHALER_MDI = "metered dose inhaler",
  INHALER_DPI = "dry powder inhaler",
  SOLUTION_NEBULIZER = "nebulizer solution",
  SPRAY_NASAL = "nasal spray",
  // Rectal/Vaginal Forms
  SUPPOSITORY_RECTAL = "rectal suppository",
  SUPPOSITORY_VAGINAL = "vaginal suppository",
  ENEMA = "enema",
  PESSARY = "pessary",
  TABLET_VAGINAL = "vaginal tablet",
  RING_VAGINAL = "vaginal ring",
  CREAM_VAGINAL = "vaginal cream",
  GEL_VAGINAL = "vaginal gel",
  // Ophthalmic/Otic Forms
  DROPS_EYE = "eye drops",
  OINTMENT_EYE = "eye ointment",
  DROPS_EAR = "ear drops",
  // Modified Release Forms
  TABLET_DELAYED_RELEASE = "delayed release tablet",
  TABLET_EXTENDED_RELEASE = "extended release tablet",
  CAPSULE_EXTENDED_RELEASE = "extended release capsule",
  TABLET_SUSTAINED_RELEASE = "sustained release tablet",
  CAPSULE_SUSTAINED_RELEASE = "sustained release capsule",
  TABLET_CONTROLLED_RELEASE = "controlled release tablet",
  CAPSULE_CONTROLLED_RELEASE = "controlled release capsule",
  // Other Forms
  IRRIGATION_SOLUTION = "irrigation solution",
  DRESSING_MEDICATED = "medicated dressing",
  // Generic grouping (when specific form unknown)
  OTHER = "other",
}

export enum LAbTestCategory {
  HEMATOLOGY = "hematology",
  CHEMISTRY = "chemistry",
  MICROBIOLOGY = "microbiology",
  IMMUNOLOGY = "immunology",
  URINE_ANALYSIS = "urinalysis",
  PATHOLOGY = "pathology",
  GENETIC = "genetic",
  OTHER = "other",
}

export enum SpecimenType {
  BLOOD = "BLOOD",
  URINE = "URINE",
  SALIVA = "SALIVA",
  STOOL = "STOOL",
  CSF = "CSF", // Cerebrospinal Fluid
  TISSUE = "TISSUE",
  SWAB = "SWAB", // Throat, nasal, etc.
  SPUTUM = "SPUTUM",
  SEMEN = "SEMEN",
  SYNOVIAL_FLUID = "SYNOVIAL_FLUID",
  PLEURAL_FLUID = "PLEURAL_FLUID",
  PERITONEAL_FLUID = "PERITONEAL_FLUID",
  HAIR = "HAIR",
  NAIL = "NAIL",
  BREATH = "BREATH",
  OTHER = "OTHER",
}

// export enum Departments {
//   MEDICAL = "Medical Departments",
//   SURGICAL = "Surgical Departments",
//   DIAGNOSTIC = "Diagnostic Departments",
//   CRITICAL_CARE = "Critical Care",
//   MATERNAL_CHILD = "Maternal and Child Health",
//   REHABILITATION = "Rehabilitation Services",
//   SPECIALIZED_CLINICS = "Specialized Clinics",
//   SUPPORT_SERVICES = "Medical Support Services",
//   ADMINISTRATIVE = "Administrative",
//   OPERATIONS = "Operational Services",
// }

// export enum HospitalUnits {
//   // Medical Departments
//   INTERNAL_MEDICINE = "Internal Medicine",
//   CARDIOLOGY = "Cardiology",
//   NEUROLOGY = "Neurology",
//   ONCOLOGY = "Oncology",
//   GASTROENTEROLOGY = "Gastroenterology",
//   PULMONOLOGY = "Pulmonology",
//   ENDOCRINOLOGY = "Endocrinology",
//   NEPHROLOGY = "Nephrology",
//   HEMATOLOGY = "Hematology",
//   INFECTIOUS_DISEASE = "Infectious Disease",
//   RHEUMATOLOGY = "Rheumatology",
//   GERIATRICS = "Geriatrics",
//   DERMATOLOGY = "Dermatology",
//   PSYCHIATRY = "Psychiatry",
//   // Surgical Departments
//   GENERAL_SURGERY = "General Surgery",
//   ORTHOPEDICS = "Orthopedics",
//   NEUROSURGERY = "Neurosurgery",
//   CARDIAC_SURGERY = "Cardiac Surgery",
//   VASCULAR_SURGERY = "Vascular Surgery",
//   PLASTIC_SURGERY = "Plastic Surgery",
//   UROLOGY = "Urology",
//   OPHTHALMOLOGY = "Ophthalmology",
//   ENT = "Ear, Nose, and Throat",
//   ANESTHESIOLOGY = "Anesthesiology",
//   TRANSPLANT = "Transplant Surgery",
//   // Diagnostic Departments
//   RADIOLOGY = "Radiology",
//   PATHOLOGY = "Pathology",
//   LABORATORY = "Laboratory Services",
//   NUCLEAR_MEDICINE = "Nuclear Medicine",
//   ELECTRODIAGNOSTICS = "Electrodiagnostic Services",
//   // Critical Care Departments
//   EMERGENCY = "Emergency Department",
//   INTENSIVE_CARE = "Intensive Care Unit",
//   CARDIAC_CARE = "Cardiac Care Unit",
//   NEONATAL_ICU = "Neonatal Intensive Care",
//   PEDIATRIC_ICU = "Pediatric Intensive Care",
//   BURN_UNIT = "Burn Unit",
//   // Maternal and Child Health
//   OBSTETRICS = "Obstetrics",
//   GYNECOLOGY = "Gynecology",
//   PEDIATRICS = "Pediatrics",
//   NEONATOLOGY = "Neonatology",
//   // Rehabilitation Services
//   PHYSICAL_THERAPY = "Physical Therapy",
//   OCCUPATIONAL_THERAPY = "Occupational Therapy",
//   SPEECH_THERAPY = "Speech Therapy",
//   CARDIAC_REHAB = "Cardiac Rehabilitation",
//   // Specialized Clinics
//   PAIN_MANAGEMENT = "Pain Management",
//   SLEEP_MEDICINE = "Sleep Medicine",
//   WOUND_CARE = "Wound Care",
//   PALLIATIVE_CARE = "Palliative Care",
//   // Medical Support Services
//   PHARMACY = "Pharmacy",
//   NUTRITION = "Nutrition and Dietetics",
//   RESPIRATORY_THERAPY = "Respiratory Therapy",
//   SOCIAL_SERVICES = "Social Services",
//   CASE_MANAGEMENT = "Case Management",
//   TELEHEALTH = "Telehealth Services",
//   // Administrative Departments
//   ADMINISTRATION = "Administration",
//   HUMAN_RESOURCES = "Human Resources",
//   FINANCE = "Finance",
//   BILLING = "Billing and Claims",
//   MEDICAL_RECORDS = "Medical Records",
//   IT = "Information Technology",
//   LEGAL = "Legal Affairs",
//   PUBLIC_RELATIONS = "Public Relations",
//   COMPLIANCE = "Compliance and Ethics",
//   QUALITY_ASSURANCE = "Quality Assurance",
//   RISK_MANAGEMENT = "Risk Management",
//   PATIENT_ADVOCACY = "Patient Advocacy",
//   ADMISSIONS = "Admissions",
//   // Operational Services
//   FACILITIES = "Facilities Management",
//   SECURITY = "Security",
//   MAINTENANCE = "Maintenance",
//   HOUSEKEEPING = "Housekeeping",
//   FOOD_SERVICES = "Food Services",
//   PROCUREMENT = "Procurement and Supply Chain",
//   VOLUNTEER_SERVICES = "Volunteer Services",
//   RESEARCH = "Research and Development",
//   EDUCATION = "Medical Education",
//   OPERATIONS = "Operations",
// }

export enum FileStatus {
  ACTIVE = "active",
  ARCHIVED = "archived",
}

export enum RecordStatusTypes {
  PENDING = "pending",
  IN_PROGRESS = "inProgress",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
}

export enum BillingStatusType {
  PENDING = "pending",
  PAYED = "payed",
}

export enum RecordPriorityTypes {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  URGENT = "urgent",
}

export enum TransferStatusType {
  PENDING = "pending",
  CANCELLED = "cancelled",
  APPROVED = "approved",
  COMPLETED = "completed",
}

// export enum ServiceTypes {
//   // Medication related charges
//   MEDICATION = "medication",
//   // Laboratory related charges
//   LABORATORY = "laboratory",
//   // Disposable items and supplies
//   SUPPLIES = "supplies",
//   DISPOSABLES = "disposables",
//   EQUIPMENT_USE = "equipmentUse",
//   // Professional services
//   CONSULTATION = "consultation",
//   PHYSICIAN_FEES = "physicianFees",
//   SPECIALIST_FEES = "specialistFees",
//   // Room charges
//   ROOM_FEES = "roomFees",
//   ICU = "icu",
//   // Procedures and surgery
//   PROCEDURE = "procedure",
//   SURGERY = "surgery",
//   ANESTHESIA = "anesthesia",
//   // Imaging services
//   RADIOLOGY = "radiology",
//   IMAGING = "imaging",
//   // Therapy services
//   PHYSICAL_THERAPY = "physicalTherapy",
//   OCCUPATIONAL_THERAPY = "occupationalTherapy",
//   RESPIRATORY_THERAPY = "respiratoryTherapy",
//   // Other common charges
//   EMERGENCY = "emergency",
//   AMBULANCE = "ambulance",
//   NURSING = "nursing",
//   FACILITY_FEE = "facilityFee",
//   ADMINISTRATIVE = "administrative",
// }
