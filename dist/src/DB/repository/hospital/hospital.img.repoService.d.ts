import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { HospitalImagingDocument } from "src/DB/schemas/hospital/hospital.imaging.schema";
export default class HospitalImagingRepoService extends DbRepoService<HospitalImagingDocument> {
    private readonly imagingModel;
    constructor(imagingModel: Model<HospitalImagingDocument>);
}
