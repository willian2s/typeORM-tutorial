import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Lesson from './Lesson.model';

@Entity()
export default class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  description: number;

  @Column()
  duration: number;

  @OneToMany(type => Lesson, courses => Course)
  lessons: Lesson[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
