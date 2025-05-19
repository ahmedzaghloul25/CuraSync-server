export declare class AddImagingCatalogDto {
    name: string;
    code: string;
    modality: string;
    bodyRegion: string;
    description?: string;
    contraindications?: string;
    patientPreparation?: string;
    radiationDose?: string;
    usesContrast?: boolean;
    contrastDetails?: string;
    requiresConsent?: boolean;
}
export declare class AddImagingCatalogArrayDto {
    imagings: AddImagingCatalogDto[];
}
