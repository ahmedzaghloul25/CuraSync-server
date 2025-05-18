import { COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class Hospital extends COMMON_PROPS.ConfirmableProps {
    name: string;
    address: string;
    licenseNumber: string;
    docs: [{
        secure_url: string;
        public_id: string;
    }];
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
export declare const HospitalModule: import("@nestjs/common").DynamicModule;
export type HospitalDocument = HydratedDocument<Hospital>;
