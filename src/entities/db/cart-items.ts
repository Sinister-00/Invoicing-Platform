import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
} from "typeorm";
import User from "./user";
import Product from "./product";

@Entity()
export default class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.cartItems, { nullable: false })
  user: Relation<User>;

  @ManyToOne(() => Product, (product) => product.cartItems)
  product: Relation<Product>;

  @Column()
  quantity: number;
}