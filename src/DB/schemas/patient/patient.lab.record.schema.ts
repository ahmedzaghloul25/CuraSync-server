import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString, RecordPriorityTypes, RecordStatusTypes } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema()
export class PatientLabOrder {
  @Prop({
    ref: "Employee",
    required: true,
  })
  requestedBy: Types.ObjectId;

  @Prop({
    ref: "Employee",
  })
  modifiedBy: Types.ObjectId;

  @Prop({
    min: 1,
    max: 10,
    default: 1,
    required: true,
  })
  durationInDays: number;
  @Prop({
    min: 1,
    max: 20,
    default: 1,
    required: true,
  })
  frequentPerDay: number;
  @Prop({ required: true })
  startDate: Date;
  @Prop()
  expectedEndDate: Date;
  @Prop()
  completedDate: Date;
  @Prop({
    enum: RecordPriorityTypes,
    default: RecordPriorityTypes.MEDIUM,
  })
  priority: string;
  @Prop({
    type: [
      {
        dayNumber: { type: Number, required: true },
        date: { type: Date, required: true },
        sampleNumber: { type: Number, default: 1 },
        scheduledTime: { type: Date, required: true },
        isCompleted: { type: Boolean, default: false },
        completedAt: { type: Date, required: true },
        completedBy: {
          type: Types.ObjectId,
          ref: "Employee",
          required: true,
        },
        notes: { type: String, maxlength: 200 },
        result: { type: Number || String, required: true },
      },
    ],
  })
  log: Array<{
    dayNumber: number;
    date: Date;
    sampleNumber: number;
    scheduledTime: number;
    isCompleted: boolean;
    completedAt: Date;
    completedBy: Types.ObjectId;
    notes?: string;
    result: number | string;
  }>;
  @Prop({
    enum: Object.values(RecordStatusTypes),
    default: RecordStatusTypes.PENDING,
  })
  status: string;
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
export const PatientLabOrderSchema =
  SchemaFactory.createForClass(PatientLabOrder);
export const PatientLabOrderModule = MongooseModule.forFeature(
  [{ name: PatientLabOrder.name, schema: PatientLabOrderSchema }],
  connectionNameString.HOSPITAL
);
export type PatientLabOrderDocument =
  HydratedDocument<PatientLabOrder>;
