import {
  Billing,
  BillingDocument,
} from "src/DB/schemas/patient/patient.billing.schema";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { TYPES } from "common/types";
import { Model } from "mongoose";

export default class PatientBillingRepoService extends DbRepoService<BillingDocument> {
  constructor(
    @InjectModel(Billing.name, TYPES.connectionNameString.HOSPITAL)
    private readonly billingModel: Model<BillingDocument>
  ) {
    super(billingModel);
  }
}
