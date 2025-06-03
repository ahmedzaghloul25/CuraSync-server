import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  NotFoundException,
  PipeTransform,
} from "@nestjs/common";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";

@Injectable()
export class HospitalValidation implements PipeTransform {
  constructor(private readonly hospitalRepoService: HospitalRepoService) {}
  async transform(
    value: string,
    metadata: ArgumentMetadata
  ): Promise<HospitalDocument> {
    if (!value) {
      throw new BadRequestException("Hospital Id not provided");
    }
    const hospital = await this.hospitalRepoService.findOne({ _id: value });
    if (!hospital) {
      throw new NotFoundException("Hospital not found");
    }
    return hospital;
  }
}
