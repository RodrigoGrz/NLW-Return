export interface SendMailData {
    subject: string;
    body: string;
}

export interface MailUtils {
    sendMail: (data: SendMailData) => Promise<void>;
}