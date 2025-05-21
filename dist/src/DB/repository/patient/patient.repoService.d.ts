import { OnModuleInit } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { PatientDocument } from "../../schemas/hospital/hospital.patient.schema";
import { Model } from "mongoose";
import PatientFileRepoService from "./patient.file.repoService";
export default class PatientRepoService extends DbRepoService<PatientDocument> implements OnModuleInit {
    private readonly patientModel;
    private readonly fileRepoService;
    constructor(patientModel: Model<PatientDocument>, fileRepoService: PatientFileRepoService);
    onModuleInit(): void;
}
