import { COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class LabCatalog extends COMMON_PROPS.CatalogProps {
    name: string;
    code: string;
    loincCode: string;
    category: string;
    description: string;
    specimenType: string;
    specimenRequirements: string;
    processingTime: string;
    referenceValues: string;
    requiresConsent: boolean;
    requiredFasting: string[];
}
export declare const LabCatalogSchema: import("mongoose").Schema<LabCatalog, import("mongoose").Model<LabCatalog, any, any, any, import("mongoose").Document<unknown, any, LabCatalog, any> & LabCatalog & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LabCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<LabCatalog>, {}> & import("mongoose").FlatRecord<LabCatalog> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const LabCatalogModule: import("@nestjs/common").DynamicModule;
export type LabCatalogDocument = HydratedDocument<LabCatalog>;
