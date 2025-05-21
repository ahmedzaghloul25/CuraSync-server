import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  Hospital,
  HospitalDocument,
} from "src/DB/schemas/hospital/hospital.schema";

@Injectable()
export default class HospitalRepoService extends DbRepoService<HospitalDocument> {
  constructor(
    @InjectModel(Hospital.name, _Types.TYPES.connectionNameString.HOSPITAL)
    private readonly hospitalModel: Model<HospitalDocument>
  ) {
    super(hospitalModel);
  }
}
