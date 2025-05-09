import { Injectable } from "@nestjs/common";
import { Hospital, HospitalDocument } from "../schemas/hospital.schema";
import { DbRepoService } from "./db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export default class HospitalRepoService extends DbRepoService<HospitalDocument> {
  constructor(
    @InjectModel(Hospital.name)
    private readonly hospitalModel: Model<HospitalDocument>
  ) {
    super(hospitalModel);
  }
}
