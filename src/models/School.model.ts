import { Column, Entity } from 'typeorm';
import Identifier from './Identifier.model';

@Entity()
export default class School {
  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  courses: number;
}
