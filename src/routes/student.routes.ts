import { validate } from 'class-validator';
import { Router } from 'express';
import { getRepository } from 'typeorm';
import logger from '../logger';
import Student from '../models/Student.model';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student);
    const { key, name, email, classes } = request.body;
    const student = repo.create({
      key,
      name,
      email,
      classes,
    });
    const errors = await validate(student);
    if (errors.length === 0) {
      const res = await repo.save(student);
      return response.status(201).json(res);
    }
    return response.status(400).json(errors.map(err => err.constraints));
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
