import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  NotFoundException,
  PipeTransform,
} from "@nestjs/common";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";

/**
 * Validation pipe that checks if a hospital exists in the database
 * by validating the provided hospital ID
 */
@Injectable()
export class HospitalValidation implements PipeTransform {
  constructor(private readonly hospitalRepoService: HospitalRepoService) {}

  /**
   * Transforms and validates the incoming hospital ID
   * @param value - The hospital ID to validate
   * @param metadata - Metadata about the parameter being validated
   * @returns Promise<HospitalDocument> - The found hospital document
   * @throws BadRequestException if no hospital ID is provided
   * @throws NotFoundException if no hospital is found with the given ID or if the hospital is not confirmed
   */
  async transform(
    value: string,
    metadata: ArgumentMetadata
  ): Promise<HospitalDocument> {
    if (!value) {
      throw new BadRequestException("Hospital Id not provided");
    }
    const hospital = await this.hospitalRepoService.findOne({
      _id: value,
      isConfirmed: true,
      isFreezed: { $exists: false },
    });
    if (!hospital) {
      throw new NotFoundException("Hospital not found or freezed");
    }
    return hospital;
  }
}
