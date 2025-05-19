import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
// Hospital-specific medicine schema
export class HospitalMedicine extends COMMON_PROPS.ConfirmableProps {
  @Prop({
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
_Types.TYPES.connectionNameString.HOSPITAL);
export type HospitalMedicineDocument = HydratedDocument<HospitalMedicine>;
