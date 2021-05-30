import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import logger from '../logger';
import Class from '../models/Class.model';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
  }
  return {};
});

classRouter.get('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const res = await repo.find();
    return response.status(200).json(res);
  } catch (err) {
    logger.error(err.message);
  }
  return {};
});

classRouter.get('/:name', async (request, response) => {
  try {
    const repo = getCustomRepository(ClassRepository);
    const res = await repo.findByName(request.params.name);
    return response.status(200).json(res);
  } catch (err) {
    logger.error(err.message);
  }
  return {};
});

export default classRouter;
