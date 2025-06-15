import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  connectionNameString,
  RecordPriorityTypes,
  RecordStatusTypes,
} from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema()
export class PatientImagingOrder {
  @Prop({
    ref: "HospitalImaging",
    required: true,
  })
  imaging: Types.ObjectId;
  @Prop({
    enum: RecordPriorityTypes,
    default: RecordPriorityTypes.MEDIUM,
  })
  priority: string;
  @Prop({
    enum: Object.values(RecordStatusTypes),
    default: RecordStatusTypes.PENDING,
  })
  status: string;

  @Prop({
    ref: "Employee",
    required: true,
  })
  requestedBy: Types.ObjectId;

  @Prop({ type: Date })
  completedAt: Date;
  @Prop({
    type: Types.ObjectId,
    ref: "Employee",
  })
  completedBy: Types.ObjectId;

  @Prop({
    ref: "Employee",
  })
  modifiedBy: Types.ObjectId;

  @Prop()
  cancellationReason: string;
  @Prop({
    ref: "File",
    required: true,
  })
  file: Types.ObjectId;
  @Prop({
    ref: "Unit",
    required: true,
  })
  unit: Types.ObjectId;
}

export const PatientImagingOrderSchema =
  SchemaFactory.createForClass(PatientImagingOrder);
export const PatientImagingOrderModule = MongooseModule.forFeature(
  [{ name: PatientImagingOrder.name, schema: PatientImagingOrderSchema }],
  connectionNameString.HOSPITAL
);
export type PatientImagingOrderDocument = HydratedDocument<PatientImagingOrder>;
