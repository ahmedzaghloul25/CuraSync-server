import { ConfirmableProps } from "common/props";
import { HydratedDocument, Types } from "mongoose";
export declare class HospitalDisposable extends ConfirmableProps {
    catalogId: Types.ObjectId;
    price: number;
    hospital: Types.ObjectId;
    inventory: number;
}
export declare const HospitalDisposableSchema: import("mongoose").Schema<HospitalDisposable, import("mongoose").Model<HospitalDisposable, any, any, any, import("mongoose").Document<unknown, any, HospitalDisposable, any> & HospitalDisposable & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HospitalDisposable, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HospitalDisposable>, {}> & import("mongoose").FlatRecord<HospitalDisposable> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const HospitalDisposableModule: import("@nestjs/common").DynamicModule;
export type HospitalDisposableDocument = HydratedDocument<HospitalDisposable>;
