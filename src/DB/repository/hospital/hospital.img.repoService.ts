import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  HospitalImaging,
  HospitalImagingDocument,
} from "src/DB/schemas/hospital/hospital.imaging.schema";

@Injectable()
export default class HospitalImagingRepoService extends DbRepoService<HospitalImagingDocument> {
  constructor(
    @InjectModel(
      HospitalImaging.name,
      _Types.TYPES.connectionNameString.HOSPITAL
    )
    private readonly imagingModel: Model<HospitalImagingDocument>
  ) {
    super(imagingModel);
  }
}
