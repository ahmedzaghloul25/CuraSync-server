import {
  Body,
  Controller,
  HttpCode,
  Param,
  Post,
  Put,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { HospitalService } from "./hospital.service";
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from "@nestjs/platform-express";
import { multerCloudConfig } from "common/utils";
import { FILE_CATEGORIES } from "common/constants";
import { createNewHospitalDto, UpdateDocumentsDto } from "./DTO";
import { AuthenticationGuard, AuthorizationGuard } from "common/guards";
import { Employee, Roles } from "common/decorators";
import { AllRoles } from "common/types";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { HospitalValidation } from "common/pipes";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";

@Controller({ version: "1", path: "hospital" })
export class HospitalController {
  constructor(private hospitalService: HospitalService) {}

  //=================== createNewHospital ======================
  @Post("new")
  @HttpCode(201)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AllRoles.SYSTEMS_ADMINISTRATOR)
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: "medicalLicense",
        maxCount: 1,
        ...multerCloudConfig({
          allowedCategory: FILE_CATEGORIES.document,
        }),
      },
      {
        name: "commercialReg",
        maxCount: 1,
        ...multerCloudConfig({
          allowedCategory: FILE_CATEGORIES.document,
        }),
      },
      {
        name: "TIN",
        maxCount: 1,
        ...multerCloudConfig({
          allowedCategory: FILE_CATEGORIES.document,
        }),
      },
      {
        name: "logo",
        maxCount: 1,
        ...multerCloudConfig({
          allowedCategory: FILE_CATEGORIES.image,
          sizeLimit: 5, // 5Mb
        }),
      },
    ])
  )
  createNewHospital(
    @Body() body: createNewHospitalDto,
    @Employee() employee: EmployeeDocument,
    @UploadedFiles() files: {
    medicalLicense: Express.Multer.File;
    commercialReg: Express.Multer.File;
    TIN: Express.Multer.File;
    logo: Express.Multer.File;
  }
  ) {
    return this.hospitalService.createNewHospital(
      body,
      employee,
      files
    );
  }
  //================= updateHospital ======================
  @Put("update/:hospitalId")
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AllRoles.SYSTEMS_ADMINISTRATOR)
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: "newCommRegDoc",
        maxCount: 1,
        ...multerCloudConfig({
          allowedCategory: FILE_CATEGORIES.document,
        }),
      },
      {
        name: "newMedLicenseDoc",
        maxCount: 1,
        ...multerCloudConfig({
          allowedCategory: FILE_CATEGORIES.document,
        }),
      },
      {
        name: "newLogo",
        maxCount: 1,
        ...multerCloudConfig({
          allowedCategory: FILE_CATEGORIES.image,
          sizeLimit: 5, //5MB
        }),
      },
    ])
  )
  updateHospital(
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument,
    @Employee() employee: EmployeeDocument,
    @Body() body: UpdateDocumentsDto,
    @UploadedFile() newCommRegDoc: Express.Multer.File,
    @UploadedFile() newMedLicenseDoc: Express.Multer.File,
    @UploadedFile() newLogo: Express.Multer.File
  ) {
    return this.hospitalService.updateDocuments(
      hospital,
      employee,
      body,
      newCommRegDoc,
      newMedLicenseDoc,
      newLogo
    );
  }
}
