export declare class AddMedicineCatalogDto {
    genericName: string;
    brandName?: string[];
    form: string;
    unit: string;
    pharmaceuticalForm?: string;
    concentration: string;
}
export declare class AddMedicineCatalogArrayDto {
    medicines: AddMedicineCatalogDto[];
}
