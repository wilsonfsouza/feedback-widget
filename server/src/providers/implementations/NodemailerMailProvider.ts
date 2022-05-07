import 'dotenv';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { ISendMailDTO } from '../../dtos/ISendMailDTO';
import { IMailProvider } from '../models/IMailProvider';

export class NodemailerMailProvider implements IMailProvider {
  async sendMail({ body, subject }: ISendMailDTO) {
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_HOST),
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    } as SMTPTransport.Options);

    try {
      await transport.sendMail({
        from: 'Team Feedget <hello@feedget.com>',
        to: 'Wilson Franca <wilson.franca.92@gmail.com>',
        subject,
        html: body,
      });
    } catch (error) {
      throw new Error('It was not possible to send an email at the moment.');
    }
  }
}
