import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  Hospital,
  HospitalDocument,
} from "src/DB/schemas/hospital/hospital.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class HospitalRepoService extends DbRepoService<HospitalDocument> {
  constructor(
    @InjectModel(Hospital.name, connectionNameString.HOSPITAL)
    private readonly hospitalModel: Model<HospitalDocument>
  ) {
    super(hospitalModel);
  }
}
