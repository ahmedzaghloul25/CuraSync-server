import { DeleteResult, FilterQuery, Model, Types } from "mongoose";
export declare abstract class DbRepoService<T> {
    private readonly model;
    constructor(model: Model<T>);
    create(data: Partial<T>): Promise<T>;
    findOne(query: FilterQuery<T>): Promise<T | null>;
    findAll(query: FilterQuery<T>): Promise<T[] | never[]>;
    findById(id: Types.ObjectId): Promise<T | null>;
    deleteOne(query: FilterQuery<T>): Promise<DeleteResult>;
    deleteMany(query: FilterQuery<T>): Promise<DeleteResult>;
    findOneAndUpdate(query: FilterQuery<T>, data: Partial<T>): Promise<T | null>;
    findOneAndDelete(query: FilterQuery<T>): Promise<T | null>;
    updateOne(query: FilterQuery<T>, data: Partial<T>): Promise<import("mongoose").UpdateWriteOpResult>;
}
