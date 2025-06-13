import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ConfirmableProps } from "common/props";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class HospitalDisposable extends ConfirmableProps {
  @Prop({
    required: true,
  })
  disposableCatalogId: Types.ObjectId;
  @Prop({
    min: 1,
    required: true,
  })
  price: number;
  @Prop({
    ref: "Hospital",
    required: true,
  })
  hospital: Types.ObjectId;
  @Prop({
    min: 0,
    required: true,
  })
  inventory: number;
}

export const HospitalDisposableSchema =
  SchemaFactory.createForClass(HospitalDisposable);
HospitalDisposableSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
export const HospitalDisposableModule = MongooseModule.forFeature(
  [{ name: HospitalDisposable.name, schema: HospitalDisposableSchema }],
  connectionNameString.HOSPITAL
);
export type HospitalDisposableDocument = HydratedDocument<HospitalDisposable>;
