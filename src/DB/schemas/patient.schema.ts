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
    length: 14,
    required: true,
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
    ref : 'Unit',
    required : true
  })
  unit : Types.ObjectId
  @Prop({
    ref: "File",
  })
  file: Types.ObjectId;
}

// pre-save to create file id

export const PatientSchema = SchemaFactory.createForClass(Patient)
export const PatientModule = MongooseModule.forFeature([
    {name : Patient.name, schema : PatientSchema}
])
export type PatientDocument = HydratedDocument<Patient>

