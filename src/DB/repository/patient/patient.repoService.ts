import {
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import {
  Patient,
  PatientDocument,
} from "../../schemas/hospital/hospital.patient.schema";
import { Model } from "mongoose";

@Injectable()
export default class PatientRepoService extends DbRepoService<PatientDocument> {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>
  ) {
    super(patientModel);
  }
  // onModuleInit() {
  //   this.patientModel.schema.post("save", async (doc: PatientDocument) => {
  //     // create new file after saving patient data.
  //     try {
  //       if (!doc.file) {
  //         const newFile = await this.fileRepoService.create({
  //           patient: doc._id,
  //           hospital : doc.hospital
  //           // createdBy: doc.createdBy,
  //         });
  //         await this.patientModel.updateOne(
  //           { _id: doc._id },
  //           { file: newFile[0]._id }
  //         );
  //       }
  //     } catch (error) {
  //       throw new InternalServerErrorException(
  //         `Error creating file for patient. ${error}`
  //       );
  //     }
  //   });
  // }
}
