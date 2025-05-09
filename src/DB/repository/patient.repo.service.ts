import { Injectable } from "@nestjs/common";
import { DbRepoService } from "./db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Patient, PatientDocument } from "../schemas/patient.schema";
import { Model } from "mongoose";

@Injectable()
export default class PatientRepoService extends DbRepoService<PatientDocument> {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>
  ) {
    super(patientModel);
  }
}
