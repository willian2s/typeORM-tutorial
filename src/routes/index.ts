import { Router } from 'express';
import courseRouter from './course.routes';
import contentRouter from './content.routes';
import lessonRouter from './lesson.routes';
import studentRouter from './student.routes';

const routes = Router();

routes.use('/course', courseRouter);
routes.use('/content', contentRouter);
routes.use('/lesson', lessonRouter);
routes.use('/student', studentRouter);

export default routes;
