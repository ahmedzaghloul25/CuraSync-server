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
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { multerCloudConfig } from "common/utils";
import { FILE_CATEGORIES } from "common/constants";
import { CreateNewHospitalDto, UpdateDocumentsDto } from "./DTO";
import { AuthenticationGuard, AuthorizationGuard } from "common/guards";
import { Employee, Roles } from "common/decorators";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { HospitalValidation } from "common/pipes";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
import { AdminRoles } from "common/types/roles";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Hospitals')
@Controller({ version: "1", path: "hospitals" })
export class HospitalController {
  constructor(private hospitalService: HospitalService) {}

  //=================== createNewHospital ======================
  @Post()
  @HttpCode(201)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiOperation({summary : 'Add new Hospital'})
  @ApiResponse({
    status:  201,
    description : 'Hospital added successfully'
  })
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
    @Body() body: CreateNewHospitalDto,
    @Employee() employee: EmployeeDocument,
    @UploadedFiles()
    files: {
      medicalLicense: Express.Multer.File;
      commercialReg: Express.Multer.File;
      TIN: Express.Multer.File;
      logo: Express.Multer.File;
    }
  ) {
    return this.hospitalService.createNewHospital(body, employee, files);
  }
  //================= updateHospital ======================
  @Put(":hospitalId")
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiParam({name : 'hospitalId', description : 'Hospital ID'})
  @ApiOperation({summary : 'update expiration dates for hospital documents and logo'})
  @ApiResponse({
    status : 200,
    description : 'Hospital updated successfully'
  })
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
    return this.hospitalService.updateHospital(
      hospital,
      employee,
      body,
      newCommRegDoc,
      newMedLicenseDoc,
      newLogo
    );
  }
}
