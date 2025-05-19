export declare class AddVendorCatalogDto {
    name: string;
    phone: string;
    address: string;
    email?: string;
    commercialRegNum: string;
    TIN: string;
}
export declare class AddVendorCatalogArrayDto {
    vendors: AddVendorCatalogDto[];
}
