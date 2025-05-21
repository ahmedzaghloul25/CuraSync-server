import { COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class PatientFile extends COMMON_PROPS.CoreProps {
    patient: Types.ObjectId;
    hospital: Types.ObjectId;
    status: string;
    admissions: Array<{
        date: Date;
        toUnit: Types.ObjectId;
    }>;
    discharges: Array<{
        date: Date;
        toUnit: Types.ObjectId;
        reasonOfDischarge: string;
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
