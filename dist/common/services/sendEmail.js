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
exports.SendEmail = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const nodemailer_1 = require("nodemailer");
let SendEmail = class SendEmail {
    eventEmitter;
    transporter;
    onModuleInit() {
        this.eventEmitter.on("sendOtp", async (data) => {
            try {
                const info = await this.transporter.sendMail({
                    from: '"HMS-app" <zaghloul85@gmail.com>',
                    to: data.to,
                    subject: data.subject,
                    html: data.html,
                });
                console.log(info.messageId);
            }
            catch (error) {
                throw new common_1.InternalServerErrorException("Unable to send OTP ", error);
            }
        });
    }
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.transporter = (0, nodemailer_1.createTransport)({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "zaghloul85@gmail.com",
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }
};
exports.SendEmail = SendEmail;
exports.SendEmail = SendEmail = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], SendEmail);
//# sourceMappingURL=sendEmail.js.map