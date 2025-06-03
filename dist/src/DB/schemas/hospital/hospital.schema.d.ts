import { ConfirmableProps } from "common/props";
import { HydratedDocument, Types } from "mongoose";
export declare class Hospital extends ConfirmableProps {
    name: string;
    slug: string;
    address: string;
    medicalLicenseNumber: string;
    medicalLicenseExpiry: Date;
    commercialRegNumber: string;
    commercialRegExpiry: Date;
    TIN: string;
    medicalLicenseDoc: {
        secure_url: string;
        public_id: string;
    };
    commercialRegDoc: {
        secure_url: string;
        public_id: string;
    };
    TINdoc: {
        secure_url: string;
        public_id: string;
    };
    logo: {
        secure_url: string;
        public_id: string;
    };
}
export declare const HospitalSchema: import("mongoose").Schema<Hospital, import("mongoose").Model<Hospital, any, any, any, import("mongoose").Document<unknown, any, Hospital, any> & Hospital & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Hospital, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Hospital>, {}> & import("mongoose").FlatRecord<Hospital> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const hospitalModule: import("@nestjs/common").DynamicModule;
export type HospitalDocument = HydratedDocument<Hospital>;
