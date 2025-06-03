import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { TYPES } from "common/types";
import { Model } from "mongoose";
import {
  PatientFileDocument,
  PatientFile,
} from "src/DB/schemas/patient/patient.file.schema";

export default class PatientFileRepoService extends DbRepoService<PatientFileDocument> {
  constructor(
    @InjectModel(PatientFile.name, TYPES.connectionNameString.HOSPITAL)
    private readonly fileModel: Model<PatientFileDocument>
  ) {
    super(fileModel);
  }
}
