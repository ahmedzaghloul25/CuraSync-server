import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
export declare class HospitalValidation implements PipeTransform {
    private readonly hospitalRepoService;
    constructor(hospitalRepoService: HospitalRepoService);
    transform(value: string, metadata: ArgumentMetadata): Promise<HospitalDocument>;
}
