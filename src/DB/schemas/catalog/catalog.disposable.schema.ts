import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { Decimal128, HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class DisposableCatalog extends COMMON_PROPS.CatalogProps {
  @Prop({
    minlength: 2,
    maxlength: 100,
    unique: true,
    trim: true,
    required: true,
  })
  name: string;
}

export const DisposableCatalogSchema =
  SchemaFactory.createForClass(DisposableCatalog);
export const DisposableCatalogModule = MongooseModule.forFeature(
  [{ name: DisposableCatalog.name, schema: DisposableCatalogSchema }],
  _Types.TYPES.connectionNameString.CATALOG
);
export type DisposableCatalogDocument = HydratedDocument<DisposableCatalog>;
