import { HydratedDocument, Types } from "mongoose";
export declare class PatientImagingOrder {
    imaging: Types.ObjectId;
    priority: string;
    status: string;
    requestedBy: Types.ObjectId;
    completedAt: Date;
    completedBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
    cancellationReason: string;
    file: Types.ObjectId;
    unit: Types.ObjectId;
}
export declare const PatientImagingOrderSchema: import("mongoose").Schema<PatientImagingOrder, import("mongoose").Model<PatientImagingOrder, any, any, any, import("mongoose").Document<unknown, any, PatientImagingOrder, any> & PatientImagingOrder & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PatientImagingOrder, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PatientImagingOrder>, {}> & import("mongoose").FlatRecord<PatientImagingOrder> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PatientImagingOrderModule: import("@nestjs/common").DynamicModule;
export type PatientImagingOrderDocument = HydratedDocument<PatientImagingOrder>;
