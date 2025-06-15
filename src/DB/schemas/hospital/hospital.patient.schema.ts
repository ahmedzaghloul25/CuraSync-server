import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  Virtual,
} from "@nestjs/mongoose";
import { MIN_MAX_LENGTH } from "common/constants";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Patient {
  @Prop({
    trim: true,
    minlength: MIN_MAX_LENGTH.nameMinInput,
    maxlength: MIN_MAX_LENGTH.nameMaxInput,
    required: true,
  })
  firstName: string;
  @Prop({
    trim: true,
    minlength: MIN_MAX_LENGTH.nameMinInput,
    maxlength: MIN_MAX_LENGTH.nameMaxInput,
    required: true,
  })
  middleName: string;
  @Prop({
    trim: true,
    minlength: MIN_MAX_LENGTH.nameMinInput,
    maxlength: MIN_MAX_LENGTH.nameMaxInput,
    required: true,
  })
  LastName: string;
  @Prop({
    minlength: MIN_MAX_LENGTH.descMinInput,
    maxlength: MIN_MAX_LENGTH.descMaxInput,
  })
  address: string;
  @Prop({
    required: true,
  })
  DOB: Date;
  @Prop({
    match: /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g,
  })
  phone: string;
  @Prop({
    length: 14,
    required: true,
  })
  identification: string;
  @Prop()
  relative: [{ name: string; phone: string; relation: string }];
  @Prop({
    ref: "Hospital",
    required: true,
  })
  hospital: Types.ObjectId;
  @Prop({
    type: Types.ObjectId,
    ref: "Employee",
    required: true,
  })
  createdBy: Types.ObjectId;
  @Prop()
  modifiedBy: Types.ObjectId;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
PatientSchema.index({ identification: 1, hospital: 1 }, { unique: true });
export const PatientModule = MongooseModule.forFeature(
  [{ name: Patient.name, schema: PatientSchema }],
  connectionNameString.HOSPITAL
);
export type PatientDocument = HydratedDocument<Patient>;
