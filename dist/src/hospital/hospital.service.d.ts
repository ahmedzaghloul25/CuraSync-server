import { Logger } from "@nestjs/common";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { createNewHospitalDto, UpdateDocumentsDto } from "./DTO";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { FileUploader } from "common/services";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
import { Types } from "mongoose";
export declare class HospitalService {
    private hospitalRepoService;
    private fileUploader;
    private logger;
    constructor(hospitalRepoService: HospitalRepoService, fileUploader: FileUploader, logger: Logger);
    createNewHospital(body: createNewHospitalDto, employee: EmployeeDocument, files: {
        medicalLicense?: Express.Multer.File;
        commercialReg?: Express.Multer.File;
        TIN?: Express.Multer.File;
        logo?: Express.Multer.File;
    }): Promise<{
        message: string;
        hospital: import("mongoose").Document<unknown, {}, import("src/DB/schemas/hospital/hospital.schema").Hospital, {}> & import("src/DB/schemas/hospital/hospital.schema").Hospital & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateDocuments(hospital: HospitalDocument, employee: EmployeeDocument, body: UpdateDocumentsDto, newCommRegDoc?: Express.Multer.File, newMedLicenseDoc?: Express.Multer.File, newLogo?: Express.Multer.File): Promise<{
        message: string;
        hospital: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/hospital/hospital.schema").Hospital, {}> & import("src/DB/schemas/hospital/hospital.schema").Hospital & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }) | null;
    }>;
}
