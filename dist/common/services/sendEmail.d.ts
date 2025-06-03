import { OnModuleInit, Logger, OnModuleDestroy } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
export declare class SendEmail implements OnModuleInit, OnModuleDestroy {
    private eventEmitter;
    private logger;
    private transporter;
    onModuleInit(): void;
    onModuleDestroy(): void;
    constructor(eventEmitter: EventEmitter2, logger: Logger);
}
