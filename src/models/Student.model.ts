import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import {
  IsEmail,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import Course from './Course.model';
import Crypto from '../helpers/crypto';
import University from './University.model';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    transformer: Crypto,
  })
  @MinLength(2)
  @MaxLength(50)
  @IsString()
  name: string;

  @Column()
  @Min(1000)
  @Max(9999)
  key: number;

  @Column({
    unique: true,
    type: 'varchar',
    nullable: false,
    transformer: Crypto,
  })
  @IsEmail()
  email: string;

  @ManyToMany(type => Course, { eager: true })
  @JoinTable()
  courses: Course[];

  @ManyToOne(type => University)
  university: University;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
