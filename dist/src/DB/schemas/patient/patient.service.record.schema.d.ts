import { COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class PatientServiceOrder extends COMMON_PROPS.CoreProps {
    service: Types.ObjectId;
    durationInDays: number;
    frequentPerDay: number;
    startDate: Date;
    expectedEndDate: Date;
    completedDate: Date;
    priority: string;
    log: Array<{
        serviceNumber: number;
        date: Date;
        doseNumber: number;
        scheduledTime: number;
        isCompleted: boolean;
        completedAt: Date;
        completedBy: Types.ObjectId;
        notes?: string;
    }>;
    status: string;
    cancellationReason: string;
    file: Types.ObjectId;
    unit: Types.ObjectId;
}
export declare const PatientServiceOrderSchema: import("mongoose").Schema<PatientServiceOrder, import("mongoose").Model<PatientServiceOrder, any, any, any, import("mongoose").Document<unknown, any, PatientServiceOrder, any> & PatientServiceOrder & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PatientServiceOrder, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PatientServiceOrder>, {}> & import("mongoose").FlatRecord<PatientServiceOrder> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ServiceModule: import("@nestjs/common").DynamicModule;
export type PatientServiceOrderDocument = HydratedDocument<PatientServiceOrder>;
