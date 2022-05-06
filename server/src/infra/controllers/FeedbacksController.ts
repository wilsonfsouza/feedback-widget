import { Request, Response } from 'express';
import { ICreateFeedbacksDTO } from '../../dtos/ICreateFeedbacksDTO';
import { NodemailerMailProvider } from '../../providers/implementations/NodemailerMailProvider';
import { PrismaFeedbacksRepository } from '../../repositories/prisma/PrismaFeedbacksRepository';
import { SubmitFeedbackService } from '../../services/SubmitFeedbackService';

interface IFeedbacksRequest extends Request {
  body: ICreateFeedbacksDTO;
}

export class FeedbacksController {
  public async create(
    request: IFeedbacksRequest,
    response: Response,
  ): Promise<Response> {
    const { type, comment, screenshot } = request.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodeMailerProvider = new NodemailerMailProvider();
    const submitFeedbacksService = new SubmitFeedbackService(
      prismaFeedbacksRepository,
      nodeMailerProvider,
    );

    await submitFeedbacksService.execute({
      type,
      comment,
      screenshot,
    });

    return response.status(201).send();
  }
}
