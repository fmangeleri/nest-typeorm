import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'text' })
  phone: string;
}
