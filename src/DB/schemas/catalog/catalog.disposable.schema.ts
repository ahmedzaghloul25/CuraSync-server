import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { _slugify } from "common/utils";
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
    trim: true,
    required: true,
  })
  name: string;
  @Prop({
    unique : true
  })
  slug: string;
}

export const DisposableCatalogSchema =
  SchemaFactory.createForClass(DisposableCatalog);
DisposableCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const DisposableCatalogModule = MongooseModule.forFeature(
  [{ name: DisposableCatalog.name, schema: DisposableCatalogSchema }],
  _Types.TYPES.connectionNameString.CATALOG
);
export type DisposableCatalogDocument = HydratedDocument<DisposableCatalog>;
