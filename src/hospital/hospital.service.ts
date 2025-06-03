import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { createNewHospitalDto, UpdateDocumentsDto } from "./DTO";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { FileUploader } from "common/services";
import { FILE_CATEGORIES } from "common/constants";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
import { _slugify } from "common/utils";
import { Types } from "mongoose";

@Injectable()
export class HospitalService {
  constructor(
    private hospitalRepoService: HospitalRepoService,
    private fileUploader: FileUploader,
    private logger: Logger
  ) {}
  //========================= createNewHospital ============================
  async createNewHospital(
    body: createNewHospitalDto,
    employee: EmployeeDocument,
    files: {
      medicalLicense?: Express.Multer.File;
      commercialReg?: Express.Multer.File;
      TIN?: Express.Multer.File;
      logo?: Express.Multer.File;
    }
  ) {
    if (!files.medicalLicense || !files.commercialReg || !files.TIN) {
      throw new UnauthorizedException("Files must uploaded");
    }
    const hospitalCheck = await this.hospitalRepoService.findOne({
      slug: _slugify(body.name),
    });
    if (hospitalCheck) {
      throw new ConflictException("Name already registered");
    }
    let uploadedLogo: { secure_url?: string; public_id?: string } = {};
    if (files.logo) {
      const result = await this.fileUploader.uploadFile(files.logo, {
        folder: "curaSync/hospital-logo",
        transformation: [
          { width: 300, height: 300, crop: "limit" },
          { quality: "auto" },
        ],
      });
      uploadedLogo.public_id = result.public_id;
      uploadedLogo.secure_url = result.secure_url;
    }
    const commercialRegUpload = await this.fileUploader.uploadFile(
      files.commercialReg,
      {
        folder: `curaSync/hospital-doc/${_slugify(body.name)}`,
      }
    );
    const medicalLicenseUpload = await this.fileUploader.uploadFile(
      files.medicalLicense,
      {
        folder: `curaSync/hospital-doc/${_slugify(body.name)}`,
      }
    );
    const TINUpload = await this.fileUploader.uploadFile(files.TIN, {
      folder: `curaSync/hospital-doc/${_slugify(body.name)}`,
    });
    let hospitalData: Partial<HospitalDocument> | null = {
      ...body,
      slug: _slugify(body.name),
      medicalLicenseDoc: {
        secure_url: medicalLicenseUpload.secure_url,
        public_id: medicalLicenseUpload.public_id,
      },
      commercialRegDoc: {
        secure_url: commercialRegUpload.secure_url,
        public_id: commercialRegUpload.public_id,
      },
      TINdoc: {
        secure_url: TINUpload.secure_url,
        public_id: TINUpload.public_id,
      },
      ...(Object.keys(uploadedLogo).length > 0 && {
        logo: {
          secure_url: uploadedLogo.secure_url!,
          public_id: uploadedLogo.public_id!,
        },
      }),
      createdBy: employee._id,
    };
    const hospital = (await this.hospitalRepoService.create({
      ...hospitalData,
    })) as HospitalDocument;
    this.logger.log(
      `[HospitalService] new hospital added, name: ${hospital.slug} - addedBy: ${employee._id}`
    );
    hospitalData = null;
    return { message: "success", hospital };
  }
  //=========================== deleteHospital ===========================
  //========================== updateDocuments ===========================
  async updateDocuments(
    hospital: HospitalDocument,
    employee: EmployeeDocument,
    body: UpdateDocumentsDto,
    newCommRegDoc?: Express.Multer.File,
    newMedLicenseDoc?: Express.Multer.File,
    newLogo?: Express.Multer.File
  ) {
    let updatedData: {
      commercialRegExpiry?: Date;
      medicalLicenseExpiry?: Date;
      address?: string;
      medicalLicenseDoc?: { secure_url: string; public_id: string };
      commercialRegDoc?: { secure_url: string; public_id: string };
      logo?: { secure_url: string; public_id: string };
    } = {};
    if (body.commercialRegExpiry) {
      if (!newCommRegDoc) {
        throw new BadRequestException("Necessary document should be provided");
      }
      const { secure_url, public_id } = await this.fileUploader.uploadFile(
        newCommRegDoc,
        {
          folder: `curaSync/hospital-doc/${hospital.slug}`,
        }
      );
      updatedData.commercialRegExpiry = body.commercialRegExpiry;
      updatedData.commercialRegDoc = { secure_url, public_id };
      await this.fileUploader.deleteFile(hospital.commercialRegDoc.public_id);
    }
    if (body.medicalLicenseExpiry) {
      if (!newMedLicenseDoc) {
        throw new BadRequestException("Necessary document should be provided");
      }
      const { secure_url, public_id } = await this.fileUploader.uploadFile(
        newMedLicenseDoc,
        {
          folder: `curaSync/hospital-doc/${hospital.slug}`,
        }
      );
      updatedData.medicalLicenseExpiry = body.medicalLicenseExpiry;
      updatedData.medicalLicenseDoc = { secure_url, public_id };
      await this.fileUploader.deleteFile(hospital.medicalLicenseDoc.public_id);
    }
    if (body.address) {
      updatedData.address = body.address;
    }
    if (newLogo) {
      const { secure_url, public_id } = await this.fileUploader.uploadFile(
        newLogo,
        {
          folder: "curaSync/hospital-logo",
          transformation: [
            { width: 300, height: 300, crop: "limit" },
            { quality: "auto" },
          ],
        }
      );
      updatedData.logo = { secure_url, public_id };
      await this.fileUploader.deleteFile(hospital.logo.public_id);
    }
    const result = await this.hospitalRepoService.findOneAndUpdate(
      { _id: hospital._id },
      {
        ...updatedData,
        modifiedBy: employee._id,
      }
    );
    this.logger.log(
      `[HospitalService] Documents updated for hospital: ${result?._id}`
    );
    return { message: "success", hospital: result };
  }
}
