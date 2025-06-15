import { HydratedDocument, Types } from "mongoose";
export declare class InventoryTransaction {
    medicine: Types.ObjectId;
    labItem: Types.ObjectId;
    disposableItem: Types.ObjectId;
    imagingItem: Types.ObjectId;
    hospital: Types.ObjectId;
    forItem: string;
    transactionType: string;
    procurementQuantity: number;
    batchNumber: string;
    expiryDate: Date;
    invoiceNumber: string;
    invoiceDate: Date;
    vendorId: Types.ObjectId;
    returnedQuantity: number;
    returnReason: string;
    originalDispenseTransactionId: Types.ObjectId;
    dispensedQuantity: number;
    orderNumber: string;
    unitId: Types.ObjectId;
    patientId: Types.ObjectId;
    notes: string;
    createdBy: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
}
export declare const InventoryTransactionSchema: import("mongoose").Schema<InventoryTransaction, import("mongoose").Model<InventoryTransaction, any, any, any, import("mongoose").Document<unknown, any, InventoryTransaction, any> & InventoryTransaction & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, InventoryTransaction, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<InventoryTransaction>, {}> & import("mongoose").FlatRecord<InventoryTransaction> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const InventoryTransactionModule: import("@nestjs/common").DynamicModule;
export type InventoryTransactionDocument = HydratedDocument<InventoryTransaction>;
