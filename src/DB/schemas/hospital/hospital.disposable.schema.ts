import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class HospitalDisposable extends COMMON_PROPS.ConfirmableProps {
  @Prop({
    ref: "DisposableCatalog",
    required: true,
  })
  catalogId: Types.ObjectId;
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
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type HospitalDisposableDocument = HydratedDocument<HospitalDisposable>;
