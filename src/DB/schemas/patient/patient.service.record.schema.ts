import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  connectionNameString,
  RecordPriorityTypes,
  RecordStatusTypes,
} from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
})
export class PatientServiceOrder {
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
    required: true,
    ref: "HospitalService",
  })
  service: Types.ObjectId;
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
    required: true,
  })
  priority: string;

  @Prop({
    type: [
      {
        dayNumber: { type: Number, required: true },
        date: { type: Date, required: true },
        ServiceNumber: { type: Number, default: 1 },
        scheduledTime: { type: Date, required: true },
        isCompleted: { type: Boolean, default: false },
        completedAt: { type: Date, required: true },
        completedBy: {
          type: Types.ObjectId,
          ref: "Employee",
          required: true,
        },
        notes: { type: String, maxlength: 200 },
      },
    ],
  })
  log: Array<{
    serviceNumber: number;
    date: Date;
    doseNumber: number;
    scheduledTime: number;
    isCompleted: boolean;
    completedAt: Date;
    completedBy: Types.ObjectId;
    notes?: string;
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

export const PatientServiceOrderSchema =
  SchemaFactory.createForClass(PatientServiceOrder);
export const ServiceModule = MongooseModule.forFeature(
  [{ name: PatientServiceOrder.name, schema: PatientServiceOrderSchema }],
  connectionNameString.HOSPITAL
);
export type PatientServiceOrderDocument = HydratedDocument<PatientServiceOrder>;
