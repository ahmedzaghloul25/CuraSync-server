import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString, TransferStatusType } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class PatientTransfer {
  @Prop({
    ref: "Employee",
    required: true,
  })
  requestedBy: Types.ObjectId;

  @Prop({
    default: false,
  })
  isConfirmed: boolean;
  @Prop({
    ref: "Employee",
  })
  confirmedBy: Types.ObjectId;

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
    enum: TransferStatusType,
    default: TransferStatusType.PENDING,
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
  connectionNameString.HOSPITAL
);
export type TransferDocument = HydratedDocument<PatientTransfer>;
