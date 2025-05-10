import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, CommonProps } from "common";
import { Decimal128, HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Service extends CommonProps {
  @Prop({
    minlength: 2,
    maxlength: 100,
    unique: true,
    trim: true,
    required: true,
  })
  name: string;
  @Prop({
    enum: _Types.ServiceTypes,
    required: true,
  })
  type: string;
  @Prop({
    min: 1,
    required: true,
  })
  price: Decimal128;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
export const ServiceModule = MongooseModule.forFeature([
  { name: Service.name, schema: ServiceSchema },
]);
export type ServiceDocument = HydratedDocument<Service>;
