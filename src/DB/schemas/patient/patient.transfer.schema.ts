import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ConfirmableProps } from "common/props";
import { TYPES } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class PatientTransfer extends ConfirmableProps {
  @Prop({
    ref: "Unit",
    required: true,
  })
  transferFrom: Types.ObjectId;
  @Prop({
    ref: "Unit",
    required: true,
  })
  transferTo: Types.ObjectId;
  @Prop({
    enum: TYPES.TransferStatusType,
    default: TYPES.TransferStatusType.PENDING,
  })
  status: string;
  @Prop({
    ref: "Hospital",
    required: true,
  })
  hospital: Types.ObjectId;
}

export const TransferSchema = SchemaFactory.createForClass(PatientTransfer);
export const TransferModule = MongooseModule.forFeature(
  [{ name: PatientTransfer.name, schema: TransferSchema }],
  TYPES.connectionNameString.HOSPITAL
);
export type TransferDocument = HydratedDocument<PatientTransfer>;
