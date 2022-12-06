import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
  })
  @Generated("uuid")
  api_id: string;

  @Column({
    nullable: false,
  })
  created_on: Date;

  @Column({
    nullable: false,
  })
  updated_on: Date;

  @Column({
    nullable: false,
  })
  @Generated("uuid")
  organization_api_id: string;

  @Column({
    nullable: false,
    default: ''
  })
  email: string;

  @Column({
    nullable: false,
  })
  is_admin: boolean;

  @Column({
    nullable: false,
    default: ''
  })
  username: string;

  constructor(username?: string, email?: string, is_admin?: boolean) {
    this.username = username || '';
    this.email = email || '';
    this.is_admin = is_admin || false;
  }

}