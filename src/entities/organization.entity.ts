import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('organizations')
export class Organization {
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
    default: ''
  })
  name: string;

  @Column({
    nullable: false,
  })
  created_on: Date;

  @Column({
    nullable: false,
  })
  updated_on: Date;

  constructor(name?: string) {
    this.name = name || '';
  }

}