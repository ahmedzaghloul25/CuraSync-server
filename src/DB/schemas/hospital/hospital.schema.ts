import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CONTAINS } from "class-validator";
import { MIN_MAX_LENGTH } from "common/constants";
import { ConfirmableProps } from "common/props";
import { TYPES } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Hospital extends ConfirmableProps {
  @Prop({
    unique: true,
    required: true,
    trim: true,
    minlength: MIN_MAX_LENGTH.nameMinInput,
    maxlength: MIN_MAX_LENGTH.nameMaxInput,
  })
  name: string;
  @Prop({
    unique: true,
    required: true,
  })
  slug: string;
  @Prop({
    minlength: MIN_MAX_LENGTH.descMinInput,
    maxlength: MIN_MAX_LENGTH.descMaxInput,
  })
  address: string;
  @Prop({
    required: true,
    unique: true,
  })
  medicalLicenseNumber: string;
  @Prop({
    required: true,
  })
  medicalLicenseExpiry: Date;
  @Prop({
    required: true,
    unique: true,
  })
  commercialRegNumber: string;
  @Prop({
    required: true,
  })
  commercialRegExpiry: Date;
  @Prop({
    required: true,
    unique: true,
  })
  TIN: string;
  @Prop({
    type: { secure_url: String, Public_id: String },
    required:  true
  })
  medicalLicenseDoc: {
    secure_url: string;
    public_id: string;
  };
  @Prop({
    type: { secure_url: String, Public_id: String },
    required:  true
  })
  commercialRegDoc: {
    secure_url: string;
    public_id: string;
  };
  @Prop({
    type: { secure_url: String, Public_id: String },
    required:  true
  })
  TINdoc: {
    secure_url: string;
    public_id: string;
  };
  @Prop({
    type: { secure_url: String, Public_id: String },
  })
  logo: {
    secure_url: string;
    public_id: string;
  };
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
export const hospitalModule = MongooseModule.forFeature(
  [{ name: Hospital.name, schema: HospitalSchema }],
  TYPES.connectionNameString.HOSPITAL
);
export type HospitalDocument = HydratedDocument<Hospital>;
