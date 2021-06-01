import { Router } from 'express';
import { getRepository } from 'typeorm';
import logger from '../logger';
import University from '../models/University.model';

const universityRouter = Router();

universityRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(University);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

universityRouter.get('/', async (request, response) => {
  try {
    const repo = getRepository(University);
    const res = await repo.find();
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

export default universityRouter;
