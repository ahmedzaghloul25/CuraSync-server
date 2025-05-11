import { InjectModel } from "@nestjs/mongoose";
import { Transfer, TransferDocument } from "../schemas/transfer.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";

export default class TransferRepoService extends DbRepoService<TransferDocument> {
  constructor(
    @InjectModel(Transfer.name)
    private readonly transferModel: Model<TransferDocument>
  ) {
    super(transferModel);
  }
}
