import { CommonProps } from "common";
import { Decimal128, HydratedDocument, Types } from "mongoose";
export declare class Service extends CommonProps {
    name: string;
    type: string;
    price: Decimal128;
}
export declare const ServiceSchema: import("mongoose").Schema<Service, import("mongoose").Model<Service, any, any, any, import("mongoose").Document<unknown, any, Service, any> & Service & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Service, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Service>, {}> & import("mongoose").FlatRecord<Service> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ServiceModule: import("@nestjs/common").DynamicModule;
export type ServiceDocument = HydratedDocument<Service>;
