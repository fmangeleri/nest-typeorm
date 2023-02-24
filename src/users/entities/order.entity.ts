import { User } from './user.entity';
import { Product } from '../../products/entities/product.entity';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  date: Date;

  @Column({ type: 'text' })
  user: User;

  @Column({ type: 'array' })
  products: Product[];
}
