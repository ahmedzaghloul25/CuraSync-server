import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  HospitalService,
  HospitalServiceDocument,
} from "src/DB/schemas/hospital/hospital.service.schema";

@Injectable()
export default class HospitalServiceRepoService extends DbRepoService<HospitalServiceDocument> {
  constructor(
    @InjectModel(
      HospitalService.name,
      _Types.TYPES.connectionNameString.HOSPITAL
    )
    private readonly serviceModel: Model<HospitalServiceDocument>
  ) {
    super(serviceModel);
  }
}
