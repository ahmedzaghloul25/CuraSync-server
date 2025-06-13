import {
  ArgumentMetadata,
  BadRequestException,
  NotFoundException,
  PipeTransform,
  UnauthorizedException,
} from "@nestjs/common";
import { CrossDbResolverService } from "common/services";
import { Types } from "mongoose";
import HospitalDepartmentRepoService from "src/DB/repository/hospital/hospital.dep.repoService";

export class DepartmentValidation implements PipeTransform {
  constructor(
    private readonly hospitalDepartmentRepoService: HospitalDepartmentRepoService,
    private readonly crossDbResolverService: CrossDbResolverService
  ) {}
  /**
   * Transforms and validates the incoming Department ID
   * @param value - The Department ID to validate
   * @param metadata - Metadata about the parameter being validated 
   * @returns - object containing Hospital Department enriched with catalog department data
   * @throws - BadRequestException if department ID not provided
   * @throws - UnauthorizedException if department ID is not valid format
   * @throws - NotFoundException if department not found
   */

  async transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException("Department catalog Id not provided");
    }
    if (!Types.ObjectId.isValid(value)) {
      throw new UnauthorizedException("Invalid Department catalog Id format");
    }
    const department = await this.hospitalDepartmentRepoService.findOne({_id : value, isConfirmed : true});
    if (!department) {
      throw new NotFoundException("Department not found");
    }
    const enrichedDepartment = await this.crossDbResolverService.enrichReferences(department)
    return enrichedDepartment;
  }
}
