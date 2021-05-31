import { Router } from 'express';
import { getConnection, getCustomRepository, getRepository } from 'typeorm';
import logger from '../logger';
import Course from '../models/Course.model';
import CourseRepository from '../repositories/CourseRepository';

const courseRouter = Router();

courseRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Course);
    const res = await repo.save(request.body);
    await getConnection().queryResultCache?.remove(['listCourse']);
    return response.status(201).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

courseRouter.get('/', async (request, response) => {
  try {
    const repo = getRepository(Course);
    const res = await repo.find({
      cache: { id: 'listCourse', milliseconds: 10000 },
    });
    return response.status(200).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

courseRouter.get('/:name', async (request, response) => {
  try {
    const repo = getCustomRepository(CourseRepository);
    const res = await repo.findByName(request.params.name);
    return response.status(200).json(res);
  } catch (err) {
    logger.error(err.message);
    return response.status(400).send();
  }
});

export default courseRouter;
