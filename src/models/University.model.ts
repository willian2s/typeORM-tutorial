import { Column, Entity } from 'typeorm';
import Identifier from './Identifier.model';

@Entity()
export default class University {
  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  graduations: number;

  @Column()
  masters: number;

  @Column()
  doctors: number;
}
