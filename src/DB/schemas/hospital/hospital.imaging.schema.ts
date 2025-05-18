import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({ timestamps: true })
export class HospitalImaging extends COMMON_PROPS.ConfirmableProps {
  @Prop({
    required: true,
  })
  catalogId: Types.ObjectId;
  @Prop({
    required: true,
    min: 0,
  })
  price: number;
  @Prop({
    required: true,
    ref: "Hospital",
  })
  hospital: Types.ObjectId;
}
export const HospitalImagingSchema =
  SchemaFactory.createForClass(HospitalImaging);
HospitalImagingSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
export const HospitalImagingModule = MongooseModule.forFeature(
  [{ name: HospitalImaging.name, schema: HospitalImagingSchema }],
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type HospitalImagingDocument = HydratedDocument<HospitalImaging>;
