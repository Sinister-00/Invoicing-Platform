import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
} from "typeorm";
import Order from "./order";
import Product from "./product";
import ColumnNumericTransformer from "../../utils/numeric-transformer";

@Entity()
export default class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.orderItems, { nullable: false })
  order: Relation<Order>;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Relation<Product>;

  @Column()
  quantity: number;

  @Column("decimal", {
    precision: 7,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
  })
  price: number;

  @Column("decimal", {
    precision: 7,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
  })
  tax: number;
}