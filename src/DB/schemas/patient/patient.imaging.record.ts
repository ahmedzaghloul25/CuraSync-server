import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema()
export class PatientImagingOrder extends COMMON_PROPS.CoreProps {
  @Prop({
    ref: "HospitalImaging",
    required: true,
  })
  imaging: Types.ObjectId;
  @Prop({
    enum: _Types.TYPES.RecordPriorityTypes,
    default: _Types.TYPES.RecordPriorityTypes.MEDIUM,
  })
  priority: string;
  @Prop({
    enum: Object.values(_Types.TYPES.RecordStatusTypes),
    default: _Types.TYPES.RecordStatusTypes.PENDING,
  })
  status: string;
  @Prop({ type: Date, required: true })
  completedAt: Date;
  @Prop({
    type: Types.ObjectId,
    ref: "Employee",
    required: true,
  })
  completedBy: Types.ObjectId;
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
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type PatientImagingOrderDocument =
  HydratedDocument<PatientImagingOrder>;
