import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class PatientTransfer extends COMMON_PROPS.ConfirmableProps {
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
    enum: _Types.TYPES.TransferStatusType,
    default: _Types.TYPES.TransferStatusType.PENDING,
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
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type TransferDocument = HydratedDocument<PatientTransfer>;
