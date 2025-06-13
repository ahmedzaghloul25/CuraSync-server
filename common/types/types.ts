import { Document, Types } from "mongoose";
import { DepartmentCatalogDocument } from "src/DB/schemas/catalog/catalog.department.schema";
import { DisposableCatalogDocument } from "src/DB/schemas/catalog/catalog.disposable.schema";
import { ImagingCatalogDocument } from "src/DB/schemas/catalog/catalog.imaging.schema";
import { LabCatalogDocument } from "src/DB/schemas/catalog/catalog.lab.schema";
import { MedicineCatalogDocument } from "src/DB/schemas/catalog/catalog.medicine.schema";
import { ServiceCatalogDocument } from "src/DB/schemas/catalog/catalog.service.schema";
import { UnitCatalogDocument } from "src/DB/schemas/catalog/catalog.unit.schema";
import { HospitalDepartmentDocument } from "src/DB/schemas/hospital/hospital.department.schema";
import { HospitalDisposableDocument } from "src/DB/schemas/hospital/hospital.disposable.schema";
import { HospitalImagingDocument } from "src/DB/schemas/hospital/hospital.imaging.schema";
import { HospitalLabDocument } from "src/DB/schemas/hospital/hospital.lab.schema";
import { HospitalMedicineDocument } from "src/DB/schemas/hospital/hospital.medicines.schema";
import { HospitalServiceDocument } from "src/DB/schemas/hospital/hospital.service.schema";
import { HospitalUnitDocument } from "src/DB/schemas/hospital/hospital.unit.schema";

export enum OtpType {
  CONFIRM_MAIL = "Confirm Email",
  PASS_RESET = "Reset Password",
}

export type TokenPayload = {
  _id: Types.ObjectId;
  occupation: string;
};

export interface EnrichedDepartmentDoc extends HospitalDepartmentDocument{
  department : DepartmentCatalogDocument,
}
export interface EnrichedUnitDoc extends HospitalUnitDocument{
  unit : UnitCatalogDocument
}
export interface EnrichedDisposableDoc extends HospitalDisposableDocument{
  disposable : DisposableCatalogDocument
}
export interface EnrichedImagingDoc extends HospitalImagingDocument{
  disposable : ImagingCatalogDocument
}
export interface EnrichedLabDoc extends HospitalLabDocument{
  lab : LabCatalogDocument
}
export interface EnrichedMedicineDoc extends HospitalMedicineDocument{
  medicine : MedicineCatalogDocument
}
export interface EnrichedServiceDoc extends HospitalServiceDocument{
  service : ServiceCatalogDocument
}

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