import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  connectionNameString,
  InventoryItemTypes,
  TransactionTypes,
} from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({ timestamps: true })
export class InventoryTransaction {
  @Prop({
    ref: "HospitalMedicine",
  })
  medicine: Types.ObjectId;
  @Prop({
    ref: "HospitalLab",
  })
  labItem: Types.ObjectId;
  @Prop({
    ref: "HospitalDisposable",
  })
  disposableItem: Types.ObjectId;
  @Prop({
    ref: "HospitalImaging",
  })
  imagingItem: Types.ObjectId;
  @Prop({
    required: true,
    ref: "Hospital",
  })
  hospital: Types.ObjectId;
  @Prop({
    enum: InventoryItemTypes,
    required: true,
  })
  forItem: string;
  @Prop({
    required: true,
    enum: TransactionTypes,
  })
  transactionType: string;

  // Procurement-related fields
  @Prop({
    min: 0,
    default: 0,
  })
  procurementQuantity: number;
  @Prop()
  batchNumber: string;
  @Prop()
  expiryDate: Date;
  @Prop()
  invoiceNumber: string;
  @Prop()
  invoiceDate: Date;
  @Prop({
    required: true,
  })
  vendorId: Types.ObjectId; //catalog

  // Return-related fields
  @Prop({
    min: 0,
    default: 0,
  })
  returnedQuantity: number;
  @Prop()
  returnReason: string;
  @Prop({
    ref: "InventoryTransaction",
  })
  originalDispenseTransactionId: Types.ObjectId;

  // Dispensing-related fields
  @Prop({
    min: 0,
    default: 0,
  })
  dispensedQuantity: number;
  @Prop()
  orderNumber: string;
  @Prop({
    ref: "Unit",
  })
  unitId: Types.ObjectId;
  @Prop({
    ref: "Patient",
  })
  patientId: Types.ObjectId;

  @Prop()
  notes: string;

  @Prop({
    type: Types.ObjectId,
    ref: "Employee",
    required: true,
  })
  createdBy: Types.ObjectId;
  @Prop({
    default: false,
  })
  isConfirmed: boolean;
  @Prop({
    ref: "Employee",
  })
  confirmedBy: Types.ObjectId;
}

export const InventoryTransactionSchema =
  SchemaFactory.createForClass(InventoryTransaction);
export const InventoryTransactionModule = MongooseModule.forFeature(
  [{ name: InventoryTransaction.name, schema: InventoryTransactionSchema }],
  connectionNameString.HOSPITAL
);
export type InventoryTransactionDocument =
  HydratedDocument<InventoryTransaction>;
