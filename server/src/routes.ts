import express from 'express';
import { FeedbacksController } from './infra/controllers/FeedbacksController';

export const routes = express.Router();

const feedbacksController = new FeedbacksController();

routes.post('/feedbacks', feedbacksController.create);
