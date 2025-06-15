import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({ timestamps: true })
export class HospitalImaging {
  @Prop({
    required: true,
  })
  imagingCatalogId: Types.ObjectId;
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

  @Prop({
    type: Types.ObjectId,
    ref: "Employee",
    required: true,
  })
  createdBy: Types.ObjectId;
  @Prop()
  isFreezed: boolean;
  @Prop({
    ref: "Employee",
  })
  freezedBy: Types.ObjectId;

  @Prop({
    default: false,
  })
  isConfirmed: boolean;
  @Prop({
    ref: "Employee",
  })
  confirmedBy: Types.ObjectId;
}
export const HospitalImagingSchema =
  SchemaFactory.createForClass(HospitalImaging);
HospitalImagingSchema.index({ imagingCatalogId: 1, hospital: 1 }, { unique: true });
export const HospitalImagingModule = MongooseModule.forFeature(
  [{ name: HospitalImaging.name, schema: HospitalImagingSchema }],
  connectionNameString.HOSPITAL
);
export type HospitalImagingDocument = HydratedDocument<HospitalImaging>;
