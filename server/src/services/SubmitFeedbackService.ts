import { IMailProvider } from '../providers/models/IMailProvider';
import { IFeedbacksRepository } from '../repositories/IFeedbacksRepository';

interface ISubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute({ type, comment, screenshot }: ISubmitFeedbackServiceRequest) {
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    const body = [
      `<div style="font-family: sans-serif; font-size: 16px; color: #222;">`,
      `<p>Feedback type: ${type}</p>`,
      `<p>Comment: ${comment}</p>`,
      `</div>`,
    ].join('\n');

    await this.mailProvider.sendMail({
      subject: 'New feedback',
      body,
    });
  }
}
