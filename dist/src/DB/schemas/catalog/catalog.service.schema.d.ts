import { COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";
export declare class ServiceCatalog extends COMMON_PROPS.CatalogProps {
    name: string;
    slug: string;
    description: string;
}
export declare const ServiceCatalogSchema: import("mongoose").Schema<ServiceCatalog, import("mongoose").Model<ServiceCatalog, any, any, any, import("mongoose").Document<unknown, any, ServiceCatalog, any> & ServiceCatalog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ServiceCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ServiceCatalog>, {}> & import("mongoose").FlatRecord<ServiceCatalog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ServiceCatalogModule: import("@nestjs/common").DynamicModule;
export type ServiceCatalogDocument = HydratedDocument<ServiceCatalog>;
