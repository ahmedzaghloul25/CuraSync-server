// import {
//   Injectable,
//   InternalServerErrorException,
//   OnModuleInit,
// } from "@nestjs/common";
// import { DbRepoService } from "./db.repo.service";
// import { InjectModel } from "@nestjs/mongoose";
// import { Patient, PatientDocument } from "../schemas/hospital/hospital.patient.schema";
// import { Model } from "mongoose";
// import { File, FileDocument } from "../schemas/patient/patient.file.schema";
// import { FileRepoService } from "./file.repo.service";

// @Injectable()
// export default class PatientRepoService
//   extends DbRepoService<PatientDocument>
//   implements OnModuleInit
// {
//   onModuleInit() {
//     this.patientModel.schema.post("save", async (doc: PatientDocument) => {
//       // create new file after saving patient data.
//       try {
//         if (!doc.file) {
//           const file = await this.fileRepoService.create({
//             patient: doc._id,
//             createdBy: doc.createdBy,
//           });
//           await this.patientModel.updateOne(
//             { _id: doc._id },
//             { file: file._id }
//           );
//         }
//       } catch (error) {
//         throw new InternalServerErrorException(
//           `Error creating file for patient. ${error}`
//         );
//       }
//     });
//   }

//   constructor(
//     @InjectModel(Patient.name)
//     private readonly patientModel: Model<PatientDocument>,
//     private readonly fileRepoService: FileRepoService
//   ) {
//     super(patientModel);
//   }
// }
