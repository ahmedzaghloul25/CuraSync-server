import { TransferDocument } from "../schemas/transfer.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
export default class TransferRepoService extends DbRepoService<TransferDocument> {
    private readonly transferModel;
    constructor(transferModel: Model<TransferDocument>);
}
