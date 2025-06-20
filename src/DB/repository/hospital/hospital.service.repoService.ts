import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  HospitalService,
  HospitalServiceDocument,
} from "src/DB/schemas/hospital/hospital.service.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class HospitalServiceRepoService extends DbRepoService<HospitalServiceDocument> {
  constructor(
    @InjectModel(
      HospitalService.name,
      connectionNameString.HOSPITAL
    )
    private readonly serviceModel: Model<HospitalServiceDocument>
  ) {
    super(serviceModel);
  }
}
