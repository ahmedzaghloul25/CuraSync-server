import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Hospital extends COMMON_PROPS.ConfirmableProps {
  @Prop({
    unique: true,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100,
  })
  name: string;
  @Prop({
    minlength: 2,
    maxlength: 400,
  })
  address: string;
  @Prop({
    required: true,
    unique: true,
  })
  licenseNumber: string;
  @Prop({
    required : true
  })
  docs: [{ secure_url: string; public_id: string }];
  @Prop()
  logo: {
    secure_url: string;
    public_id: string;
  };
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
export const HospitalModule = MongooseModule.forFeature(
  [{ name: Hospital.name, schema: HospitalSchema }],
_Types.TYPES.connectionNameString.HOSPITAL);
export type HospitalDocument = HydratedDocument<Hospital>;
