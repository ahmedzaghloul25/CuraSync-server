import { COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class PatientLabOrder extends COMMON_PROPS.CoreProps {
    durationInDays: number;
    frequentPerDay: number;
    startDate: Date;
    expectedEndDate: Date;
    completedDate: Date;
    priority: string;
    log: Array<{
        dayNumber: number;
        date: Date;
        sampleNumber: number;
        scheduledTime: number;
        isCompleted: boolean;
        completedAt: Date;
        completedBy: Types.ObjectId;
        notes?: string;
        result: number | string;
    }>;
    status: string;
    cancellationReason: string;
    file: Types.ObjectId;
    unit: Types.ObjectId;
}
export declare const PatientLabOrderSchema: import("mongoose").Schema<PatientLabOrder, import("mongoose").Model<PatientLabOrder, any, any, any, import("mongoose").Document<unknown, any, PatientLabOrder, any> & PatientLabOrder & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PatientLabOrder, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PatientLabOrder>, {}> & import("mongoose").FlatRecord<PatientLabOrder> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PatientLabOrderModule: import("@nestjs/common").DynamicModule;
export type PatientLabOrderDocument = HydratedDocument<PatientLabOrder>;
