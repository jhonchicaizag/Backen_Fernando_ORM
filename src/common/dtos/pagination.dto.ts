import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) //sirve para parsear un string a number o
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset: number;
}
