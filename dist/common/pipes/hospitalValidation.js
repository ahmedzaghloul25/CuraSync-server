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
exports.HospitalValidation = void 0;
const common_1 = require("@nestjs/common");
const hospital_repoService_1 = require("../../src/DB/repository/hospital/hospital.repoService");
let HospitalValidation = class HospitalValidation {
    hospitalRepoService;
    constructor(hospitalRepoService) {
        this.hospitalRepoService = hospitalRepoService;
    }
    async transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException("Hospital Id not provided");
        }
        const hospital = await this.hospitalRepoService.findOne({
            _id: value,
            isConfirmed: true,
            isFreezed: { $exists: false },
        });
        if (!hospital) {
            throw new common_1.NotFoundException("Hospital not found or freezed");
        }
        return hospital;
    }
};
exports.HospitalValidation = HospitalValidation;
exports.HospitalValidation = HospitalValidation = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hospital_repoService_1.default])
], HospitalValidation);
//# sourceMappingURL=hospitalValidation.js.map