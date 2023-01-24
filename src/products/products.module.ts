import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // para trabajar con la caracteristica solo en este modulo de TYPEORM
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}

