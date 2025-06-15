import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class HospitalMedicine {
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

  @Prop({
    type: Types.ObjectId,
    ref: "Employee",
    required: true,
  })
  createdBy: Types.ObjectId;
  @Prop()
  isFreezed: boolean;
  @Prop({
    ref: "Employee",
  })
  freezedBy: Types.ObjectId;

  @Prop({
    default: false,
  })
  isConfirmed: boolean;
  @Prop({
    ref: "Employee",
  })
  confirmedBy: Types.ObjectId;
}

export const HospitalMedicineSchema =
  SchemaFactory.createForClass(HospitalMedicine);
  HospitalMedicineSchema.index({medicineCatalogId : 1, hospital : 1}, {unique : true})
export const HospitalMedicineModule = MongooseModule.forFeature(
  [{ name: HospitalMedicine.name, schema: HospitalMedicineSchema }],
connectionNameString.HOSPITAL);
export type HospitalMedicineDocument = HydratedDocument<HospitalMedicine>;
