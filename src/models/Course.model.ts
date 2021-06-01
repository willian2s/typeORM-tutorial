import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Lesson from './Lesson.model';
import University from './University.model';

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

  @ManyToOne(type => University, courses => Course, { eager: true })
  university: University;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
