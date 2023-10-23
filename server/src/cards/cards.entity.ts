import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cards {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column()
  ticket: string;

  @Column()
  yield: string;

  @Column()
  days: string;

  @Column()
  sold: string;

  @Column()
  img: string;
}
