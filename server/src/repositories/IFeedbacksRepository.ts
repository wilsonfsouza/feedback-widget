import { ICreateFeednacksDTO } from '../dtos/ICreateFeedbacksDTO';

export interface IFeedbacksRepository {
  create: (data: ICreateFeednacksDTO) => Promise<void>;
}
