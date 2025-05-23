import { Types } from "mongoose";
export declare enum OtpType {
    CONFIRM_MAIL = "Confirm Email",
    PASS_RESET = "Reset Password"
}
export type TokenPayload = {
    _id: Types.ObjectId;
    occupation: string;
};
export declare enum connectionNameString {
    CATALOG = "catalog",
    HOSPITAL = "hospital",
    SUPER = "super"
}
export declare enum ImagingTypes {
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
    OTHER = "other"
}
export declare enum ImagingBodyRegions {
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
    OTHER = "other"
}
export declare enum MedicineUnits {
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
    OTHER = "other"
}
export declare enum TransactionTypes {
    PROCUREMENT = "procurement",
    DISPENSING = "dispensing",
    RETURN = "return"
}
export declare enum InventoryItemTypes {
    MEDICINE = "medicine",
    LABORATORY = "department",
    DISPOSABLE = "disposable",
    IMAGING = "imaging"
}
export declare enum MedicationForm {
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
    CREAM = "cream",
    OINTMENT = "ointment",
    GEL = "gel",
    JELLY = "jelly",
    LOTION = "lotion",
    PASTE = "paste",
    FOAM = "foam",
    PATCH_TRANSDERMAL = "transdermal patch",
    PLASTER = "plaster",
    SOLUTION_INJECTABLE = "injectable solution",
    SUSPENSION_INJECTABLE = "injectable suspension",
    POWDER_FOR_INJECTION = "powder for injection",
    IMPLANT = "implant",
    INHALER_MDI = "metered dose inhaler",
    INHALER_DPI = "dry powder inhaler",
    SOLUTION_NEBULIZER = "nebulizer solution",
    SPRAY_NASAL = "nasal spray",
    SUPPOSITORY_RECTAL = "rectal suppository",
    SUPPOSITORY_VAGINAL = "vaginal suppository",
    ENEMA = "enema",
    PESSARY = "pessary",
    TABLET_VAGINAL = "vaginal tablet",
    RING_VAGINAL = "vaginal ring",
    CREAM_VAGINAL = "vaginal cream",
    GEL_VAGINAL = "vaginal gel",
    DROPS_EYE = "eye drops",
    OINTMENT_EYE = "eye ointment",
    DROPS_EAR = "ear drops",
    TABLET_DELAYED_RELEASE = "delayed release tablet",
    TABLET_EXTENDED_RELEASE = "extended release tablet",
    CAPSULE_EXTENDED_RELEASE = "extended release capsule",
    TABLET_SUSTAINED_RELEASE = "sustained release tablet",
    CAPSULE_SUSTAINED_RELEASE = "sustained release capsule",
    TABLET_CONTROLLED_RELEASE = "controlled release tablet",
    CAPSULE_CONTROLLED_RELEASE = "controlled release capsule",
    IRRIGATION_SOLUTION = "irrigation solution",
    DRESSING_MEDICATED = "medicated dressing",
    OTHER = "other"
}
export declare enum LAbTestCategory {
    HEMATOLOGY = "hematology",
    CHEMISTRY = "chemistry",
    MICROBIOLOGY = "microbiology",
    IMMUNOLOGY = "immunology",
    URINE_ANALYSIS = "urinalysis",
    PATHOLOGY = "pathology",
    GENETIC = "genetic",
    OTHER = "other"
}
export declare enum SpecimenType {
    BLOOD = "BLOOD",
    URINE = "URINE",
    SALIVA = "SALIVA",
    STOOL = "STOOL",
    CSF = "CSF",
    TISSUE = "TISSUE",
    SWAB = "SWAB",
    SPUTUM = "SPUTUM",
    SEMEN = "SEMEN",
    SYNOVIAL_FLUID = "SYNOVIAL_FLUID",
    PLEURAL_FLUID = "PLEURAL_FLUID",
    PERITONEAL_FLUID = "PERITONEAL_FLUID",
    HAIR = "HAIR",
    NAIL = "NAIL",
    BREATH = "BREATH",
    OTHER = "OTHER"
}
export declare enum FileStatus {
    ACTIVE = "active",
    ARCHIVED = "archived"
}
export declare enum RecordStatusTypes {
    PENDING = "pending",
    IN_PROGRESS = "inProgress",
    CANCELLED = "cancelled",
    COMPLETED = "completed"
}
export declare enum BillingStatusType {
    PENDING = "pending",
    PAYED = "payed"
}
export declare enum RecordPriorityTypes {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    URGENT = "urgent"
}
export declare enum TransferStatusType {
    PENDING = "pending",
    CANCELLED = "cancelled",
    APPROVED = "approved",
    COMPLETED = "completed"
}
