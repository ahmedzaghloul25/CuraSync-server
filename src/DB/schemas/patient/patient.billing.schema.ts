import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  Virtual,
} from "@nestjs/mongoose";
import { ConfirmableProps } from "common/props";
import { TYPES } from "common/types";
import { Decimal128, HydratedDocument, Types } from "mongoose";

@Schema()
export class Billing extends ConfirmableProps {
  @Prop({
    ref: "File",
    required: true,
  })
  file: Types.ObjectId;
  @Prop({
    ref: "HospitalMedicineOrder",
  })
  medicine: [Types.ObjectId];
  @Prop({
    ref: "HospitalLabOrder",
  })
  lab: [Types.ObjectId];
  @Prop({
    ref: "HospitalImagingOrder",
  })
  imaging: [Types.ObjectId];
  @Prop({
    ref: "HospitalService",
  })
  service: [Types.ObjectId];

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
    enum: TYPES.BillingStatusType,
    default: TYPES.BillingStatusType.PENDING,
  })
  status: string;
}
export const BillingSchema = SchemaFactory.createForClass(Billing);
BillingSchema.pre("save", function (next) {
  try {
    if (this.isModified("payable")) {
      const payable = parseFloat(this.payable.toString());
      const taxRate = this.taxRate / 100;
      const tax = payable * taxRate;
      this.set("tax", new Types.Decimal128(tax.toFixed(2)));
      this.set("amountPaid", new Types.Decimal128((tax + payable).toFixed(2)));
    }
    next();
  } catch (error) {
    next(error);
  }
});
export const BillingModule = MongooseModule.forFeature(
  [{ name: Billing.name, schema: BillingSchema }],
  TYPES.connectionNameString.HOSPITAL
);
export type BillingDocument = HydratedDocument<Billing>;
