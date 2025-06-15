import { Decimal128, HydratedDocument, Types } from "mongoose";
export declare class Billing {
    file: Types.ObjectId;
    medicine: [Types.ObjectId];
    lab: [Types.ObjectId];
    imaging: [Types.ObjectId];
    service: [Types.ObjectId];
    payable: Decimal128;
    taxRate: number;
    tax: Decimal128;
    amountPaid: Decimal128;
    status: string;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
}
export declare const BillingSchema: import("mongoose").Schema<Billing, import("mongoose").Model<Billing, any, any, any, import("mongoose").Document<unknown, any, Billing, any> & Billing & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Billing, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Billing>, {}> & import("mongoose").FlatRecord<Billing> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const BillingModule: import("@nestjs/common").DynamicModule;
export type BillingDocument = HydratedDocument<Billing>;
