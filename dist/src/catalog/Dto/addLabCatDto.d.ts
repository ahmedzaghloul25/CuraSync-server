import { _Types } from "common";
export declare class AddLabCatalogDto {
    name: string;
    code: string;
    loincCode?: string;
    category: _Types.TYPES.LAbTestCategory;
    description?: string;
    specimenType: _Types.TYPES.SpecimenType;
    specimenRequirements?: string;
    processingTime?: string;
    referenceValues?: string;
    requiresConsent?: boolean;
    requiredFasting?: string[];
}
export declare class AddLabCatalogArrayDto {
    laboratories: AddLabCatalogDto[];
}
