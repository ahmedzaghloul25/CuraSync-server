import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { TYPES } from "common/types";
import { Model } from "mongoose";
import {
  HospitalLab,
  HospitalLabDocument,
} from "src/DB/schemas/hospital/hospital.lab.schema";

@Injectable()
export default class HospitalLabRepoService extends DbRepoService<HospitalLabDocument> {
  constructor(
    @InjectModel(HospitalLab.name, TYPES.connectionNameString.HOSPITAL)
    private readonly labModel: Model<HospitalLabDocument>
  ) {
    super(labModel);
  }
}
