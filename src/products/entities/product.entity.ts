// las entities son representacion de este objeto en la base de datos, en otras palabras seria una tabla
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './product-image.entity';

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

  @Column('text', {
    array: true,
    default: [],
  })
  tags: string[];
  //relacione de uno a muchos
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
  })
  images?: ProductImage[];

  @BeforeInsert() //antes de insertar modificamos el slug
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", ''); // se debe cambiar el "target" a 2021 en el tsconfig.json
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}

// 2. una vez configurado la entidad pasabamos a configurar el respectivo modulo.ts
