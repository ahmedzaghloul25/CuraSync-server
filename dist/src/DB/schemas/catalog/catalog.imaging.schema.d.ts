import { HydratedDocument, Types } from "mongoose";
export declare class ImagingCatalog {
    name: string;
    slug: string;
    code: string;
    modality: string;
    bodyRegion: string;
    description: string;
    contraindications: string;
    patientPreparation: string;
    radiationDose: string;
    usesContrast: boolean;
    contrastDetails: string;
    requiresConsent: boolean;
    addedByHospitalId: Types.ObjectId;
    addedByEmployeeId: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
}
export declare const ImagingCatalogSchema: import("mongoose").Schema<ImagingCatalog, import("mongoose").Model<ImagingCatalog, any, any, any, import("mongoose").Document<unknown, any, ImagingCatalog, any> & ImagingCatalog & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ImagingCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ImagingCatalog>, {}> & import("mongoose").FlatRecord<ImagingCatalog> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ImagingCatalogModule: import("@nestjs/common").DynamicModule;
export type ImagingCatalogDocument = HydratedDocument<ImagingCatalog>;
