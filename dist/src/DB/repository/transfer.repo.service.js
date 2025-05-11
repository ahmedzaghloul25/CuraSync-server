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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const transfer_schema_1 = require("../schemas/transfer.schema");
const db_repo_service_1 = require("./db.repo.service");
const mongoose_2 = require("mongoose");
let TransferRepoService = class TransferRepoService extends db_repo_service_1.DbRepoService {
    transferModel;
    constructor(transferModel) {
        super(transferModel);
        this.transferModel = transferModel;
    }
};
TransferRepoService = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(transfer_schema_1.Transfer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransferRepoService);
exports.default = TransferRepoService;
//# sourceMappingURL=transfer.repo.service.js.map