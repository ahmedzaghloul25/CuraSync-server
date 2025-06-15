import { HydratedDocument, Types } from "mongoose";
export declare class PatientFile {
    patient: Types.ObjectId;
    hospital: Types.ObjectId;
    status: string;
    currentUnit: Types.ObjectId;
    initialDiagnosis: Array<{
        date: Date;
        diagnosis: string;
    }>;
    admissions: Array<{
        date: Date;
        toUnit: Types.ObjectId;
    }>;
    discharges: Array<{
        date: Date;
        fromUnit: Types.ObjectId;
        reasonOfDischarge: string;
        requestedBy: Types.ObjectId;
        isApproved: boolean;
        approvedBy: Types.ObjectId;
    }>;
}
export declare const PatientFileSchema: import("mongoose").Schema<PatientFile, import("mongoose").Model<PatientFile, any, any, any, import("mongoose").Document<unknown, any, PatientFile, any> & PatientFile & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PatientFile, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PatientFile>, {}> & import("mongoose").FlatRecord<PatientFile> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PatientFileModule: import("@nestjs/common").DynamicModule;
export type PatientFileDocument = HydratedDocument<PatientFile>;
