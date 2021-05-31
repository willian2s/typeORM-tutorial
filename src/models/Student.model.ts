import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import {
  IsEmail,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import Class from './Class.model';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MinLength(2)
  @MaxLength(50)
  @IsString()
  name: string;

  @Column()
  @Min(1000)
  @Max(9999)
  key: number;

  @Column()
  @IsEmail()
  email: string;

  @ManyToMany(type => Class, { eager: true })
  @JoinTable()
  classes: Class[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
