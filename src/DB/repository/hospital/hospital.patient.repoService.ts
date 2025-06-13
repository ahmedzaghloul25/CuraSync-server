import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  Patient,
  PatientDocument,
} from "src/DB/schemas/hospital/hospital.patient.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class HospitalPatientRepoService extends DbRepoService<PatientDocument> {
  constructor(
    @InjectModel(Patient.name, connectionNameString.HOSPITAL)
    private readonly patientModel: Model<PatientDocument>
  ) {
    super(patientModel);
  }
}
