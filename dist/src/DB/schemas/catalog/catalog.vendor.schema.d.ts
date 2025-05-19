import { COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";
export declare class VendorCatalog extends COMMON_PROPS.CatalogProps {
    name: string;
    slug: string;
    phone: string;
    address: string;
    email: string;
    commercialRegNum: string;
    TIN: string;
}
export declare const VendorCatalogSchema: import("mongoose").Schema<VendorCatalog, import("mongoose").Model<VendorCatalog, any, any, any, import("mongoose").Document<unknown, any, VendorCatalog, any> & VendorCatalog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, VendorCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<VendorCatalog>, {}> & import("mongoose").FlatRecord<VendorCatalog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const VendorCatalogModule: import("@nestjs/common").DynamicModule;
export type VendorCatalogDocument = HydratedDocument<VendorCatalog>;
