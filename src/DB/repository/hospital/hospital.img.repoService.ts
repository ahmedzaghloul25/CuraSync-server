import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  HospitalImaging,
  HospitalImagingDocument,
} from "src/DB/schemas/hospital/hospital.imaging.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class HospitalImagingRepoService extends DbRepoService<HospitalImagingDocument> {
  constructor(
    @InjectModel(
      HospitalImaging.name,
      connectionNameString.HOSPITAL
    )
    private readonly imagingModel: Model<HospitalImagingDocument>
  ) {
    super(imagingModel);
  }
}
