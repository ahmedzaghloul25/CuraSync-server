import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  PatientMedicineOrder,
  PatientMedicineOrderDocument,
} from "src/DB/schemas/patient/patient.medicine.record.schema";

export default class PatientMedicineOrderRepoService extends DbRepoService<PatientMedicineOrderDocument> {
  constructor(
    @InjectModel(
      PatientMedicineOrder.name,
      _Types.TYPES.connectionNameString.HOSPITAL
    )
    private readonly medicineOrderModel: Model<PatientMedicineOrderDocument>
  ) {
    super(medicineOrderModel);
  }
}
