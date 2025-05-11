import { Types } from "mongoose";
export default class CommonProps {
    createdBy: Types.ObjectId;
    isDeleted: boolean;
    deletedBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
    hospital: Types.ObjectId;
    file: Types.ObjectId;
    service: Types.ObjectId;
    patient: Types.ObjectId;
    unit: Types.ObjectId;
    departments: [Types.ObjectId];
}
