import { Column, Entity } from 'typeorm';
import Identifier from './Identifier.model';

@Entity()
export default class College {
  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  graduations: number;
}
