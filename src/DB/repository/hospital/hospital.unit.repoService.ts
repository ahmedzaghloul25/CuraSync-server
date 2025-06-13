import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  HospitalUnit,
  HospitalUnitDocument,
} from "src/DB/schemas/hospital/hospital.unit.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class HospitalUnitRepoService extends DbRepoService<HospitalUnitDocument> {
  constructor(
    @InjectModel(HospitalUnit.name, connectionNameString.HOSPITAL)
    private readonly hospitalModel: Model<HospitalUnitDocument>
  ) {
    super(hospitalModel);
  }
}
