// las entities son representacion de este objeto en la base de datos, en otras palabras seria una tabla
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;

  @Column('float', { default: 0 })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column('text', { unique: true })
  slug: string;

  @Column('int', { default: 0 })
  stock: number;

  @Column({ type: 'text', array: true })
  sizes: string[];

  @Column('text')
  gender: string;
}

// 2. una vez configurado la entidad pasabamos a configurar el respectivo modulo.ts
