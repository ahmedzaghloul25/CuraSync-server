import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ConfirmableProps } from "common/props";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
// Hospital-specific medicine schema
export class HospitalMedicine extends ConfirmableProps {
  @Prop({
    required: true,
  })
    medicineCatalogId: Types.ObjectId;
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
    min : 0,
    required  :true
  })
  inventory : number
}

export const HospitalMedicineSchema =
  SchemaFactory.createForClass(HospitalMedicine);
  HospitalMedicineSchema.index({catalogId : 1, hospital : 1}, {unique : true})
export const HospitalMedicineModule = MongooseModule.forFeature(
  [{ name: HospitalMedicine.name, schema: HospitalMedicineSchema }],
connectionNameString.HOSPITAL);
export type HospitalMedicineDocument = HydratedDocument<HospitalMedicine>;
