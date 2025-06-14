import { HydratedDocument, Types } from "mongoose";
export declare class Patient {
    firstName: string;
    middleName: string;
    LastName: string;
    address: string;
    DOB: Date;
    phone: string;
    identification: string;
    relative: [{
        name: string;
        phone: string;
        relation: string;
    }];
    hospital: Types.ObjectId;
    createdBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
}
export declare const PatientSchema: import("mongoose").Schema<Patient, import("mongoose").Model<Patient, any, any, any, import("mongoose").Document<unknown, any, Patient, any> & Patient & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Patient, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Patient>, {}> & import("mongoose").FlatRecord<Patient> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PatientModule: import("@nestjs/common").DynamicModule;
export type PatientDocument = HydratedDocument<Patient>;
