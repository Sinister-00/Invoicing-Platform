import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from "typeorm";
import CartItem from "./cart-items";
import OrderItem from "./order-item";


@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  _id: string;

  @Column({
    nullable: true,
  })
  id: string;

  @Column()
  name: string;

  @Column()
  company: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column('simple-array', { nullable: true })
  colors: string[];

  @Column()
  image: string;

  @Column('text')
  description: string;

  @Column()
  category: string;

  @Column('boolean')
  featured: boolean;

  @Column('int')
  stock: number;

  @OneToMany(() => CartItem, (cartItem) => cartItem.product)
  cartItems: Relation<CartItem[]>;


  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: Relation<OrderItem[]>;
}
