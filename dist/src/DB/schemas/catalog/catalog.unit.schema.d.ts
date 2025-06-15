import { HydratedDocument, Types } from "mongoose";
export declare class UnitCatalog {
    name: string;
    slug: string;
    description: string;
    departmentSlug: string;
    addedByHospitalId: Types.ObjectId;
    addedByEmployeeId: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
}
export declare const UnitCatalogSchema: import("mongoose").Schema<UnitCatalog, import("mongoose").Model<UnitCatalog, any, any, any, import("mongoose").Document<unknown, any, UnitCatalog, any> & UnitCatalog & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UnitCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UnitCatalog>, {}> & import("mongoose").FlatRecord<UnitCatalog> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UnitCatalogModule: import("@nestjs/common").DynamicModule;
export type UnitCatalogDocument = HydratedDocument<UnitCatalog>;
