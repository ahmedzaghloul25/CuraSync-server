import { InventoryTransactionDocument } from "src/DB/schemas/inventory/inventory.transaction.schema";
import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
export default class InventoryRepoService extends DbRepoService<InventoryTransactionDocument> {
    private readonly inventoryModel;
    constructor(inventoryModel: Model<InventoryTransactionDocument>);
}
