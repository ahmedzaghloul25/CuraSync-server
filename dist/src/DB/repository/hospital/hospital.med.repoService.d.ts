import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { HospitalMedicineDocument } from "src/DB/schemas/hospital/hospital.medicines.schema";
export default class HospitalMedicineRepoService extends DbRepoService<HospitalMedicineDocument> {
    private readonly medicineModel;
    constructor(medicineModel: Model<HospitalMedicineDocument>);
}
