import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
} from "typeorm";
import User from "./user";
import Product from "./product";
import Service from "./service";

@Entity()
export default class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.cartItems, {nullable: false})
  user: Relation<User>;

  @ManyToOne(() => Product, (product) => product.cartItems)
  product: Relation<Product>;

  @ManyToOne(() => Service, (service) => service.cartItems)
  service: Relation<Service>;

  @Column()
  quantity: number;
}
