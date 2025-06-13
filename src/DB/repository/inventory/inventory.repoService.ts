import {
  InventoryTransaction,
  InventoryTransactionDocument,
} from "src/DB/schemas/inventory/inventory.transaction.schema";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { connectionNameString } from "common/types";

export default class InventoryRepoService extends DbRepoService<InventoryTransactionDocument> {
  constructor(
    @InjectModel(
      InventoryTransaction.name,
      connectionNameString.HOSPITAL
    )
    private readonly inventoryModel: Model<InventoryTransactionDocument>
  ) {
    super(inventoryModel)
  }
}
