import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { TransferDocument } from "src/DB/schemas/patient/patient.transfer.schema";
export default class PatientTransferRepoService extends DbRepoService<TransferDocument> {
    private readonly transferOrderModel;
    constructor(transferOrderModel: Model<TransferDocument>);
}
