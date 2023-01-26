import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, ProductImage } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage])], // para trabajar con la caracteristica solo en este modulo de TYPEORM, aqui las entitys
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}

