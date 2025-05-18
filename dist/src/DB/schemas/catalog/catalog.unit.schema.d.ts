import { COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";
export declare class UnitCatalog extends COMMON_PROPS.CatalogProps {
    name: string;
    slug: string;
    description: string;
    departmentSlug: string;
}
export declare const UnitCatalogSchema: import("mongoose").Schema<UnitCatalog, import("mongoose").Model<UnitCatalog, any, any, any, import("mongoose").Document<unknown, any, UnitCatalog, any> & UnitCatalog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UnitCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UnitCatalog>, {}> & import("mongoose").FlatRecord<UnitCatalog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UnitCatalogModule: import("@nestjs/common").DynamicModule;
export type UnitCatalogDocument = HydratedDocument<UnitCatalog>;
