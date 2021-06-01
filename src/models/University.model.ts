import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Course from './Course.model';
import Student from './Student.model';

@Entity()
export default class University {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  cnpj: string;

  @Column()
  professors: number;

  @OneToMany(type => Student, university => University)
  students: Student[];

  @OneToMany(type => Course, university => University)
  courses: Course[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
