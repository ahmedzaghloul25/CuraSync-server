import { HydratedDocument, Types } from "mongoose";
export declare class ServiceCatalog {
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
export declare const ServiceCatalogSchema: import("mongoose").Schema<ServiceCatalog, import("mongoose").Model<ServiceCatalog, any, any, any, import("mongoose").Document<unknown, any, ServiceCatalog, any> & ServiceCatalog & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ServiceCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ServiceCatalog>, {}> & import("mongoose").FlatRecord<ServiceCatalog> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ServiceCatalogModule: import("@nestjs/common").DynamicModule;
export type ServiceCatalogDocument = HydratedDocument<ServiceCatalog>;
