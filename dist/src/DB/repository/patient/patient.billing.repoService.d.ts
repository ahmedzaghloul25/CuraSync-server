import { BillingDocument } from "src/DB/schemas/patient/patient.billing.schema";
import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
export default class PatientBillingRepoService extends DbRepoService<BillingDocument> {
    private readonly billingModel;
    constructor(billingModel: Model<BillingDocument>);
}
