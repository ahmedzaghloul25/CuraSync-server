import { MongooseModule, Prop, Schema, SchemaFactory, Virtual } from "@nestjs/mongoose";
import { CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Patient extends CommonProps {
  @Prop({
    trim: true,
    minlength: 2,
    maxlength: 200,
    required: true,
    unique : true
  })
  fullName: string;
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
    match : /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g
  })
  phone : string
  @Prop({
    length: 14,
    required: true,
    unique : true
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

}

export const PatientSchema = SchemaFactory.createForClass(Patient)
export const PatientModule = MongooseModule.forFeature([
    {name : Patient.name, schema : PatientSchema}
])
export type PatientDocument = HydratedDocument<Patient>

