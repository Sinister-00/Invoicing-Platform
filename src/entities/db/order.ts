import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  Relation,
} from "typeorm";
import User from "./user";
import OrderItem from "./order-item";
import ColumnNumericTransformer from "../../utils/numeric-transformer";

@Entity()
export default class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders, {nullable: false})
  user: Relation<User>;

  @Column("decimal", {
    precision: 10,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
  })
  totalAmount: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: Relation<OrderItem[]>;
}
