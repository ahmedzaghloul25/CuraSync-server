import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ConfirmableProps } from "common/props";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})
export class HospitalService extends ConfirmableProps {
  @Prop({
    required: true,
  })
  serviceCatalogId: Types.ObjectId;
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

export const HospitalServiceSchema =
  SchemaFactory.createForClass(HospitalService);
HospitalServiceSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
export const HospitalServiceModule = MongooseModule.forFeature(
  [{ name: HospitalService.name, schema: HospitalServiceSchema }],
connectionNameString.HOSPITAL);
export type HospitalServiceDocument = HydratedDocument<HospitalService>;
