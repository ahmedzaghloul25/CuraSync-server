import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  HospitalMedicine,
  HospitalMedicineDocument,
} from "src/DB/schemas/hospital/hospital.medicines.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class HospitalMedicineRepoService extends DbRepoService<HospitalMedicineDocument> {
  constructor(
    @InjectModel(
      HospitalMedicine.name,
      connectionNameString.HOSPITAL
    )
    private readonly medicineModel: Model<HospitalMedicineDocument>
  ) {
    super(medicineModel);
  }
}
