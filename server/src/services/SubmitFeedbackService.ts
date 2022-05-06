import { IFeedbacksRepository } from '../repositories/IFeedbacksRepository';

interface ISubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(private feedbacksRepository: IFeedbacksRepository) {}

  async execute({ type, comment, screenshot }: ISubmitFeedbackServiceRequest) {
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
  }
}
