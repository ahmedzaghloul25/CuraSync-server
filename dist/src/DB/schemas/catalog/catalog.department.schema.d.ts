import { HydratedDocument, Types } from "mongoose";
export declare class DepartmentCatalog {
    name: string;
    slug: string;
    description: string;
    addedByHospitalId: Types.ObjectId;
    addedByEmployeeId: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
}
export declare const DepartmentCatalogSchema: import("mongoose").Schema<DepartmentCatalog, import("mongoose").Model<DepartmentCatalog, any, any, any, import("mongoose").Document<unknown, any, DepartmentCatalog, any> & DepartmentCatalog & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DepartmentCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DepartmentCatalog>, {}> & import("mongoose").FlatRecord<DepartmentCatalog> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const DepartmentCatalogModule: import("@nestjs/common").DynamicModule;
export type DepartmentCatalogDocument = HydratedDocument<DepartmentCatalog>;
