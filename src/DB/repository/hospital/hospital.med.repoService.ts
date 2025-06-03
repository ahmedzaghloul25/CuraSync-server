import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { TYPES } from "common/types";
import { Model } from "mongoose";
import {
  HospitalMedicine,
  HospitalMedicineDocument,
} from "src/DB/schemas/hospital/hospital.medicines.schema";

@Injectable()
export default class HospitalMedicineRepoService extends DbRepoService<HospitalMedicineDocument> {
  constructor(
    @InjectModel(
      HospitalMedicine.name,
      TYPES.connectionNameString.HOSPITAL
    )
    private readonly medicineModel: Model<HospitalMedicineDocument>
  ) {
    super(medicineModel);
  }
}
