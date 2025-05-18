import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({ timestamps: true })
export class InventoryTransaction extends COMMON_PROPS.ConfirmableProps {
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
    enum: _Types.TYPES.InventoryItemTypes,
    required: true,
  })
  forItem: string;
  @Prop({
    required: true,
    enum: _Types.TYPES.TransactionTypes,
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
}

export const MedicineTransactionSchema =
  SchemaFactory.createForClass(InventoryTransaction);
export const MedicineTransactionModule = MongooseModule.forFeature(
  [{ name: InventoryTransaction.name, schema: MedicineTransactionSchema }],
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type MedicineTransactionDocument =
  HydratedDocument<InventoryTransaction>;
