import { Router } from 'express';
import { getRepository } from 'typeorm';
import logger from '../logger';
import Student from '../models/Student.model';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

studentRouter.get('/', async (request, response) => {
  try {
    const repo = getRepository(Student);
    const res = await repo.find();
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

export default studentRouter;
