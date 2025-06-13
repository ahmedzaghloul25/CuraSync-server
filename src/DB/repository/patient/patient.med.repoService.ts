import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { Model } from "mongoose";
import {
  PatientMedicineOrder,
  PatientMedicineOrderDocument,
} from "src/DB/schemas/patient/patient.medicine.record.schema";

export default class PatientMedicineOrderRepoService extends DbRepoService<PatientMedicineOrderDocument> {
  constructor(
    @InjectModel(
      PatientMedicineOrder.name,
      connectionNameString.HOSPITAL
    )
    private readonly medicineOrderModel: Model<PatientMedicineOrderDocument>
  ) {
    super(medicineOrderModel);
  }
}
