import { Router } from 'express';
import { getRepository } from 'typeorm';
import logger from '../logger';
import Content from '../models/Content.model';

const contentRouter = Router();

contentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Content);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

contentRouter.get('/', async (request, response) => {
  try {
    const repo = getRepository(Content);
    const res = await repo.find();
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

export default contentRouter;
