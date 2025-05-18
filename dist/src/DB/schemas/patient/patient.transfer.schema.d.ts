import { COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class PatientTransfer extends COMMON_PROPS.ConfirmableProps {
    transferFrom: Types.ObjectId;
    transferTo: Types.ObjectId;
    status: string;
    hospital: Types.ObjectId;
}
export declare const TransferSchema: import("mongoose").Schema<PatientTransfer, import("mongoose").Model<PatientTransfer, any, any, any, import("mongoose").Document<unknown, any, PatientTransfer, any> & PatientTransfer & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PatientTransfer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PatientTransfer>, {}> & import("mongoose").FlatRecord<PatientTransfer> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const TransferModule: import("@nestjs/common").DynamicModule;
export type TransferDocument = HydratedDocument<PatientTransfer>;
