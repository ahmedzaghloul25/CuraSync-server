import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  Virtual,
} from "@nestjs/mongoose";
import { _Types, CommonProps } from "common";
import { Decimal128, HydratedDocument, Types } from "mongoose";

@Schema()
export class Billing extends CommonProps {

  @Prop({
    ref: "ServiceRecord",
  })
  serviceRecords: [Types.ObjectId];

  @Prop({
    required: true,
  })
  payable: Decimal128;
  @Prop({
    default: 14,
  })
  taxRate: number;
  @Prop({})
  tax: Decimal128;
  @Prop({
    required: true,
  })
  amountPaid: Decimal128;

  @Prop({
    enum: _Types.BillingStatusType,
    default: _Types.BillingStatusType.PENDING,
  })
  status: string;
}
export const BillingSchema = SchemaFactory.createForClass(Billing);
BillingSchema.pre("save", function (next) {
  if (this.isModified("payable")) {
    const payable = parseFloat(this.payable.toString());
    const taxRate = this.taxRate / 100;
    const tax = payable * taxRate;
    this.set('tax',  new Types.Decimal128(tax.toFixed(2)));
    this.set('amountPaid', new Types.Decimal128((tax + payable).toFixed(2)));
  }
  
  next();
});
export const BillingModule = MongooseModule.forFeature([
  { name: Billing.name, schema: BillingSchema },
]);
export type BillingDocument = HydratedDocument<Billing>;
