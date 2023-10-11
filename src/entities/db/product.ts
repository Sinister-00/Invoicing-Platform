import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";


@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  _id: string;

  @Column()
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
}
