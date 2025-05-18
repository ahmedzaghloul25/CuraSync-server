import { OnModuleInit } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
export declare class SendEmail implements OnModuleInit {
    private eventEmitter;
    private transporter;
    onModuleInit(): void;
    constructor(eventEmitter: EventEmitter2);
}
