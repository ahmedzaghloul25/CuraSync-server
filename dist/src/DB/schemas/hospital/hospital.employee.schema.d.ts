import { AllRoles } from "common/types/roles";
import { HydratedDocument, Types } from "mongoose";
export declare class Employee {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    occupation: AllRoles;
    phone: string;
    DOB: Date;
    isEmailConfirmed: boolean;
    otp: string;
    otpFor: string;
    otpExpireAt: Date;
    passwordChangedAt: Date;
    fullName: string;
    hospital: Types.ObjectId;
    createdBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
}
export declare const EmployeeSchema: import("mongoose").Schema<Employee, import("mongoose").Model<Employee, any, any, any, import("mongoose").Document<unknown, any, Employee, any> & Employee & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Employee, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Employee>, {}> & import("mongoose").FlatRecord<Employee> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const employeeModule: import("@nestjs/common").DynamicModule;
export type EmployeeDocument = HydratedDocument<Employee>;
