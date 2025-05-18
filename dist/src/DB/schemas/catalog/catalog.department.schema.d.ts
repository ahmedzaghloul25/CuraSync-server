import { COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";
export declare class DepartmentCatalog extends COMMON_PROPS.CatalogProps {
    name: string;
    slug: string;
    description: string;
}
export declare const DepartmentCatalogSchema: import("mongoose").Schema<DepartmentCatalog, import("mongoose").Model<DepartmentCatalog, any, any, any, import("mongoose").Document<unknown, any, DepartmentCatalog, any> & DepartmentCatalog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DepartmentCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DepartmentCatalog>, {}> & import("mongoose").FlatRecord<DepartmentCatalog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const DepartmentCatalogModule: import("@nestjs/common").DynamicModule;
export type DepartmentCatalogDocument = HydratedDocument<DepartmentCatalog>;
