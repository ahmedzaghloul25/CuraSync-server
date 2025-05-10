import { Injectable } from "@nestjs/common";
import { DbRepoService } from "./db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Patient, PatientDocument } from "../schemas/patient.schema";
import { Model } from "mongoose";
import { File, FileDocument } from "../schemas/file.schema";
import { FileRepoService } from "./file.repo.service";

@Injectable()
export default class PatientRepoService extends DbRepoService<PatientDocument> {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>
  ) {
    super(patientModel);
  }
}
