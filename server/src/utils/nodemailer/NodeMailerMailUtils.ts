import { MailUtils, SendMailData } from "../mailUtils";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "55a1cede2f0089",
        pass: "5f5edbe2df0ad1"
    }
});

export class NodeMailMailUtils implements MailUtils {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Rodrigo Grzegorczyk <rodrigo@email.com>',
            subject,
            html: body,
        });
    }
}