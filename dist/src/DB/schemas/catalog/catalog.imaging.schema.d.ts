import { COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";
export declare class ImagingCatalog extends COMMON_PROPS.CatalogProps {
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
}
export declare const ImagingCatalogSchema: import("mongoose").Schema<ImagingCatalog, import("mongoose").Model<ImagingCatalog, any, any, any, import("mongoose").Document<unknown, any, ImagingCatalog, any> & ImagingCatalog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ImagingCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ImagingCatalog>, {}> & import("mongoose").FlatRecord<ImagingCatalog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ImagingCatalogModule: import("@nestjs/common").DynamicModule;
export type ImagingCatalogDocument = HydratedDocument<ImagingCatalog>;
