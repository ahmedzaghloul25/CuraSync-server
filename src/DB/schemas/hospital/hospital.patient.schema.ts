import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  Virtual,
} from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Patient extends COMMON_PROPS.CoreProps {
  @Prop({
    trim: true,
    minlength: 2,
    maxlength: 50,
    required: true,
  })
  firstName: string;
  @Prop({
    trim: true,
    minlength: 2,
    maxlength: 50,
    required: true,
  })
  middleName: string;
  @Prop({
    trim: true,
    minlength: 2,
    maxlength: 50,
    required: true,
  })
  LastName: string;
  @Prop({
    minlength: 2,
    maxlength: 400,
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
    unique: true,
  })
  identification: string;
  @Prop({
    minlength: 2,
    maxlength: 500,
    required: true,
  })
  initialDiagnosis: string;
  @Prop()
  relative: [{ name: string; phone: string; relation: string }];
  @Prop({
    ref: "Hospital",
    required: true,
  })
  hospital: Types.ObjectId;
  @Prop({
    ref: "File",
    required: true,
  })
  file: Types.ObjectId;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
export const PatientModule = MongooseModule.forFeature(
  [{ name: Patient.name, schema: PatientSchema }],
_Types.TYPES.connectionNameString.HOSPITAL);
export type PatientDocument = HydratedDocument<Patient>;
