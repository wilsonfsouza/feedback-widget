import express from 'express';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { prisma } from './prisma';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_HOST),
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
} as SMTPTransport.Options);

routes.post('/feedbacks', async (req, res) => {
  const { comment, type, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      comment,
      type,
      screenshot,
    },
  });

  await transport.sendMail({
    from: 'Team Feedget <hello@feedget.com>',
    to: 'Wilson Franca <wilson.franca.92@gmail.com>',
    subject: 'New feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #222;">`,
      `<p>Feedback type: ${type}</p>`,
      `<p>Comment: ${comment}</p>`,
      `</div>`,
    ].join('\n'),
  });

  return res.status(201).json({ data: feedback });
});
