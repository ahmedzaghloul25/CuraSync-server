import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class ServiceRecord extends CommonProps {
  @Prop({
    min: 0,
    default: 1,
  })
  quantity: number;
  @Prop({
    enum: _Types.ServiceRecordTypes,
    default: _Types.ServiceRecordTypes.PENDING,
  })
  status: string;
  @Prop({
    minlength: 2,
    maxlength: 500,
  })
  notes: string;
}

export const ServiceRecordSchema = SchemaFactory.createForClass(ServiceRecord)
export const ServiceModule = MongooseModule.forFeature([
    {name : ServiceRecord.name, schema : ServiceRecordSchema}
])
export type ServiceRecordDocument = HydratedDocument<ServiceRecord>
