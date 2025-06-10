import {
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
  Logger,
  OnModuleDestroy,
} from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { createTransport, SendMailOptions, Transporter } from "nodemailer";

@Injectable()
export class SendEmail implements OnModuleInit ,OnModuleDestroy {
  private transporter: Transporter;
  onModuleInit() {
    this.eventEmitter.once("sendEmail", async (data: SendMailOptions) => {
      try {
        const info = await this.transporter.sendMail({
          from: '"CuraSync" <zaghloul85@gmail.com>', // sender address
          to: data.to, // list of receivers
          subject: data.subject, // Subject line
          //text: data.text, // plain text body
          html: data.html, // html body
        });
        this.logger.log(
          `Email for ${data.subject} sent successfully to Employee: ${data.to}`,
          "SendEmail"
        );
      } catch (error) {
        this.logger.error(
          `[SendEmail] Failed to send email for "${data.subject}" to employee: ${data.to} - ${error.message}`,
          error.stack || error.toString()
        );
        throw new InternalServerErrorException(
          "Error sending email ",
          error.message
        );
      }
    });
  }
  onModuleDestroy() {
    this.eventEmitter.removeAllListeners('sendEmail')
    if(this.transporter.close){
      this.transporter.close()
    }
  }
  constructor(
    private eventEmitter: EventEmitter2,
    private logger: Logger
  ) {
    this.transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: "zaghloul85@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
}
