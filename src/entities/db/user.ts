import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany, Relation
} from "typeorm";
import CartItem from "./cart-items";
import Order from "./order";


@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  username: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    length: 50,
  })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => CartItem, (cartItem) => cartItem.user)
  cartItems: Relation<CartItem[]>;

  @OneToMany(() => Order, (order) => order.user)
  orders: Relation<Order[]>;
}
