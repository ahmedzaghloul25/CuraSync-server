import { TYPES } from "common/types";
export declare class AddLabCatalogDto {
    name: string;
    code: string;
    loincCode?: string;
    category: TYPES.LAbTestCategory;
    description?: string;
    specimenType: TYPES.SpecimenType;
    specimenRequirements?: string;
    processingTime?: string;
    referenceValues?: string;
    requiresConsent?: boolean;
    requiredFasting?: string[];
}
export declare class AddLabCatalogArrayDto {
    laboratories: AddLabCatalogDto[];
}
