import { Router } from 'express';
import { getRepository } from 'typeorm';
import logger from '../logger';
import Lesson from '../models/Lesson.model';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Lesson);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

lessonRouter.get('/', async (request, response) => {
  try {
    const repo = getRepository(Lesson);
    const res = await repo.find();
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

export default lessonRouter;
