import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { PatientMedicineOrderDocument } from "src/DB/schemas/patient/patient.medicine.record.schema";
export default class PatientMedicineOrderRepoService extends DbRepoService<PatientMedicineOrderDocument> {
    private readonly medicineOrderModel;
    constructor(medicineOrderModel: Model<PatientMedicineOrderDocument>);
}
