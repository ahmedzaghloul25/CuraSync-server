import { LAbTestCategory, SpecimenType } from "common/types";
export declare class AddLabCatalogDto {
    name: string;
    code: string;
    loincCode?: string;
    category: LAbTestCategory;
    description?: string;
    specimenType: SpecimenType;
    specimenRequirements?: string;
    processingTime?: string;
    referenceValues?: string;
    requiresConsent?: boolean;
    requiredFasting?: string[];
}
export declare class AddLabCatalogArrayDto {
    laboratories: AddLabCatalogDto[];
}
