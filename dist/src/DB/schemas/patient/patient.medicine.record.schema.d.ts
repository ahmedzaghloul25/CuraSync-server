import { CoreProps } from "common/props";
import { HydratedDocument, Types } from "mongoose";
export declare class PatientMedicineOrder extends CoreProps {
    medicine: Types.ObjectId;
    durationInDays: number;
    frequentPerDay: number;
    startDate: Date;
    expectedEndDate: Date;
    completedDate: Date;
    priority: string;
    log: Array<{
        dayNumber: number;
        date: Date;
        doseNumber: number;
        scheduledTime: number;
        isCompleted: boolean;
        completedAt: Date;
        completedBy: Types.ObjectId;
        notes?: string;
    }>;
    status: string;
    clinicalNotes: string;
    cancellationReason: string;
    file: Types.ObjectId;
    unit: Types.ObjectId;
}
export declare const PatientMedicineOrderSchema: import("mongoose").Schema<PatientMedicineOrder, import("mongoose").Model<PatientMedicineOrder, any, any, any, import("mongoose").Document<unknown, any, PatientMedicineOrder, any> & PatientMedicineOrder & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PatientMedicineOrder, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PatientMedicineOrder>, {}> & import("mongoose").FlatRecord<PatientMedicineOrder> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ServiceModule: import("@nestjs/common").DynamicModule;
export type PatientMedicineOrderDocument = HydratedDocument<PatientMedicineOrder>;
