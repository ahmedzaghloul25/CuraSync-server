import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
import { BillingDocument } from "../schemas/billing.schema";
export default class BillingRepoService extends DbRepoService<BillingDocument> {
    private readonly billingModel;
    constructor(billingModel: Model<BillingDocument>);
}
