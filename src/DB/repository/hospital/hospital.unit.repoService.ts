import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  HospitalUnit,
  HospitalUnitDocument,
} from "src/DB/schemas/hospital/hospital.unit.schema";

@Injectable()
export default class HospitalUnitRepoService extends DbRepoService<HospitalUnitDocument> {
  constructor(
    @InjectModel(HospitalUnit.name, _Types.TYPES.connectionNameString.HOSPITAL)
    private readonly hospitalModel: Model<HospitalUnitDocument>
  ) {
    super(hospitalModel);
  }
}
