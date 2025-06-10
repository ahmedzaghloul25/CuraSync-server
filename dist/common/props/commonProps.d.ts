import { Types } from "mongoose";
export declare abstract class CoreProps {
    createdBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
}
export declare abstract class CatalogProps {
    addedByHospitalId: string;
    addedByEmployeeId: string;
}
export declare abstract class ConfirmableProps extends CoreProps {
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
}
