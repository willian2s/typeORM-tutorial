import { EntityRepository, Repository } from 'typeorm';
import Course from '../models/Course.model';

@EntityRepository(Course)
export default class CourseRepository extends Repository<Course> {
  public async findByName(name: string): Promise<Course[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}
