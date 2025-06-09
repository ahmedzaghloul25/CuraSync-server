import { HospitalService } from "./hospital.service";
import { CreateNewHospitalDto, UpdateDocumentsDto } from "./DTO";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
export declare class HospitalController {
    private hospitalService;
    constructor(hospitalService: HospitalService);
    createNewHospital(body: CreateNewHospitalDto, employee: EmployeeDocument, files: {
        medicalLicense: Express.Multer.File;
        commercialReg: Express.Multer.File;
        TIN: Express.Multer.File;
        logo: Express.Multer.File;
    }): Promise<{
        message: string;
        hospital: import("mongoose").Document<unknown, {}, import("src/DB/schemas/hospital/hospital.schema").Hospital, {}> & import("src/DB/schemas/hospital/hospital.schema").Hospital & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    updateHospital(hospital: HospitalDocument, employee: EmployeeDocument, body: UpdateDocumentsDto, newCommRegDoc: Express.Multer.File, newMedLicenseDoc: Express.Multer.File, newLogo: Express.Multer.File): Promise<{
        message: string;
        hospital: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/hospital/hospital.schema").Hospital, {}> & import("src/DB/schemas/hospital/hospital.schema").Hospital & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null;
    }>;
}
