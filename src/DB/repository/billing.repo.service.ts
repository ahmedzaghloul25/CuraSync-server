import { Injectable } from "@nestjs/common";
import { DbRepoService } from "./db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Billing, BillingDocument } from "../schemas/billing.schema";

@Injectable()
export default class BillingRepoService extends DbRepoService<BillingDocument> {
  constructor(
    @InjectModel(Billing.name)
    private readonly billingModel: Model<BillingDocument>
  ) {
    super(billingModel);
  }
}
