import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class PatientFile extends COMMON_PROPS.CoreProps {
  @Prop({
    ref: "Patient",
    required: true,
  })
  patient: Types.ObjectId;
  @Prop({
    ref: "Hospital",
    required: true,
  })
  hospital: Types.ObjectId;
  @Prop({
    enum: _Types.TYPES.FileStatus,
    default: _Types.TYPES.FileStatus.ACTIVE,
  })
  status: string;
  @Prop({
    type: [
      {
        date: { type: Date, required: true },
        toUnit: { type: Types.ObjectId, ref: "Unit" },
      },
    ],
  })
  admissions: Array<{ date: Date; toUnit: Types.ObjectId }>;
  @Prop({
    type: [
      {
        date: { type: Date, required: true },
        fromUnit: { type: Types.ObjectId, ref: "Unit" },
        reasonOfDischarge: {
          enum: ["Improvement", "deceased"],
          required: true,
        },
      },
    ],
  })
  discharges: Array<{
    date: Date;
    toUnit: Types.ObjectId;
    reasonOfDischarge: string;
  }>;
}

export const PatientFileSchema = SchemaFactory.createForClass(PatientFile);
export const PatientFileModule = MongooseModule.forFeature(
  [{ name: PatientFile.name, schema: PatientFileSchema }],
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type PatientFileDocument = HydratedDocument<PatientFile>;
