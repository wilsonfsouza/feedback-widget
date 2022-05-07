import { ICreateFeedbacksDTO } from '../../dtos/ICreateFeedbacksDTO';
import { prisma } from '../../prisma';
import { IFeedbacksRepository } from '../IFeedbacksRepository';

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({ type, comment, screenshot }: ICreateFeedbacksDTO) {
    await prisma.feedback.create({
      data: {
        comment,
        type,
        screenshot,
      },
    });
  }
}
