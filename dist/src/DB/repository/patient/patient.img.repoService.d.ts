import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { PatientImagingOrderDocument } from "src/DB/schemas/patient/patient.imaging.record.schema";
export default class PatientImagingOrderRepoService extends DbRepoService<PatientImagingOrderDocument> {
    private readonly imagingOrderModel;
    constructor(imagingOrderModel: Model<PatientImagingOrderDocument>);
}
