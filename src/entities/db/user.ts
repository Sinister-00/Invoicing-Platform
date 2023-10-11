import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";


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
}
