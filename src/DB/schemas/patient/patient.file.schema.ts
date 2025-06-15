import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { MIN_MAX_LENGTH } from "common/constants";
import { connectionNameString, FileStatus } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
})
export class PatientFile {
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
    enum: FileStatus,
    default: FileStatus.ACTIVE,
  })
  status: string;
    @Prop({
    ref: "HospitalUnit"
  })
  currentUnit: Types.ObjectId
  @Prop({
    minlength: 2,
    maxlength: 500,
    required: true,
    type: [
      {
        date: { type: Date, required: true },
        diagnosis: {
          type: String,
          minlength: MIN_MAX_LENGTH.descMinInput,
          maxlength: MIN_MAX_LENGTH.descMaxInput,
          required: true,
        },
      },
    ],
  })
  initialDiagnosis: Array<{ date: Date; diagnosis: string }>;
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
          enum: ["Improvement", "Deceased", "Own request"],
          required: true,
        },
        requestedBy: { type: Types.ObjectId, ref: "Employee", required: true },
        isApproved: { type: Boolean, default: false },
        approvedBy: { type: Types.ObjectId, ref: "Employee" },
      },
    ],
  })
  discharges: Array<{
    date: Date;
    fromUnit: Types.ObjectId;
    reasonOfDischarge: string;
    requestedBy: Types.ObjectId;
    isApproved: boolean;
    approvedBy: Types.ObjectId;
  }>;
}

export const PatientFileSchema = SchemaFactory.createForClass(PatientFile);
PatientFileSchema.index({ patient: 1, hospital: 1 }, { unique: true });
export const PatientFileModule = MongooseModule.forFeature(
  [{ name: PatientFile.name, schema: PatientFileSchema }],
  connectionNameString.HOSPITAL
);
export type PatientFileDocument = HydratedDocument<PatientFile>;
