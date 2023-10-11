import "dotenv/config";
import { DataSource } from "typeorm";
import User from "./entities/db/user";
import Product from "./entities/db/product";
import Order from "./entities/db/order";
import CartItem from "./entities/db/cart-items";
import OrderItem from "./entities/db/order-item";

const dbEntities = [User, Product, CartItem, Order, OrderItem]

export const dbSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  ssl: true,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: process.env.NODE_ENV === "production" ? false : ["error"],
  entities: dbEntities,
  subscribers: [],
  migrations: [],
  cache: {
    duration: 30000, // 30 seconds
  },
});