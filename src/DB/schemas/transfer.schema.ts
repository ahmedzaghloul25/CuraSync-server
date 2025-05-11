import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Transfer extends CommonProps {
  @Prop({
    ref: "Unit",
    required: true,
  })
  transferFrom: Types.ObjectId;
  @Prop({
    ref: "Unit",
    required: true,
  })
  transferTo: Types.ObjectId;
  @Prop({
    enum: _Types.TransferStatusType,
    default: _Types.TransferStatusType.PENDING,
  })
  status: string;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);
export const TransferModule = MongooseModule.forFeature([
  { name: Transfer.name, schema: TransferSchema },
]);
export type TransferDocument = HydratedDocument<Transfer>;
