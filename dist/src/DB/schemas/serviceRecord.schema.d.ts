import { CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class ServiceRecord extends CommonProps {
    quantity: number;
    status: string;
    notes: string;
}
export declare const ServiceRecordSchema: import("mongoose").Schema<ServiceRecord, import("mongoose").Model<ServiceRecord, any, any, any, import("mongoose").Document<unknown, any, ServiceRecord, any> & ServiceRecord & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ServiceRecord, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ServiceRecord>, {}> & import("mongoose").FlatRecord<ServiceRecord> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ServiceModule: import("@nestjs/common").DynamicModule;
export type ServiceRecordDocument = HydratedDocument<ServiceRecord>;
