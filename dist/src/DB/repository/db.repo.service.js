"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbRepoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let DbRepoService = class DbRepoService {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return await this.model.create(data);
    }
    async findOne(query) {
        return await this.model.findOne(query);
    }
    async findAll(query) {
        return await this.model.find(query);
    }
    async findById(id) {
        return await this.model.findById(id);
    }
    async deleteOne(query) {
        return await this.model.deleteOne(query);
    }
    async deleteMany(query) {
        return await this.model.deleteMany(query);
    }
    async findOneAndUpdate(query, data) {
        return await this.model.findOneAndUpdate(query, data, { new: true });
    }
    async findOneAndDelete(query) {
        return await this.model.findOneAndDelete(query);
    }
    async updateOne(query, data) {
        return await this.model.updateOne(query, data);
    }
};
exports.DbRepoService = DbRepoService;
exports.DbRepoService = DbRepoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DbRepoService);
//# sourceMappingURL=db.repo.service.js.map