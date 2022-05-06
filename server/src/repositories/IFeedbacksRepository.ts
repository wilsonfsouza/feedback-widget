import { ICreateFeedbacksDTO } from '../dtos/ICreateFeedbacksDTO';

export interface IFeedbacksRepository {
  create: (data: ICreateFeedbacksDTO) => Promise<void>;
}
