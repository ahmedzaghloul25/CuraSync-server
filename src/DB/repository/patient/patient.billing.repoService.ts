import {
  Billing,
  BillingDocument,
} from "src/DB/schemas/patient/patient.billing.schema";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { connectionNameString } from "common/types";

export default class PatientBillingRepoService extends DbRepoService<BillingDocument> {
  constructor(
    @InjectModel(Billing.name, connectionNameString.HOSPITAL)
    private readonly billingModel: Model<BillingDocument>
  ) {
    super(billingModel);
  }
}
