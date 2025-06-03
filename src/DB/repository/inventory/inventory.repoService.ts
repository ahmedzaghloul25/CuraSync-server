import {
  InventoryTransaction,
  InventoryTransactionDocument,
} from "src/DB/schemas/inventory/inventory.transaction.schema";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { TYPES } from "common/types";
import { Model } from "mongoose";

export default class InventoryRepoService extends DbRepoService<InventoryTransactionDocument> {
  constructor(
    @InjectModel(
      InventoryTransaction.name,
      TYPES.connectionNameString.HOSPITAL
    )
    private readonly inventoryModel: Model<InventoryTransactionDocument>
  ) {
    super(inventoryModel)
  }
}
