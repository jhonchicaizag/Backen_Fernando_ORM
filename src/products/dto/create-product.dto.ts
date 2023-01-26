// 1. se utliza class validator y calls-transformeer $ yarn add class-validator class-transformer
// 2. se debe configurar el global de pipes en el main.ts
// app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//       forbidNonWhitelisted: true,
//     }),

import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  title: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  slug?: string;
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;
  @IsString({ each: true })
  @IsArray()
  sizes: string[];
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}

// 3. Para crear el objeto en la base de datos, debemos agregar la inyeccion de dependencias en el constructor del service
//     @InjectRepository(Product) private readonly productRepository: Repository<Product>,
//   ) {}
