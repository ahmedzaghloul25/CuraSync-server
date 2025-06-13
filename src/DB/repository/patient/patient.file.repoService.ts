import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { Model } from "mongoose";
import {
  PatientFileDocument,
  PatientFile,
} from "src/DB/schemas/patient/patient.file.schema";

export default class PatientFileRepoService extends DbRepoService<PatientFileDocument> {
  constructor(
    @InjectModel(PatientFile.name, connectionNameString.HOSPITAL)
    private readonly fileModel: Model<PatientFileDocument>
  ) {
    super(fileModel);
  }
}
