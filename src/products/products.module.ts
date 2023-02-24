import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';
import { Product } from './entities/product.entity';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CategoriesService } from './services/categories/categories.service';
import { Category } from './entities/category.entity';
import { BrandsController } from './controllers/brands/brands.controller';
import { BrandsService } from './services/brands/brands.service';
import { Brand } from './entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Brand])],
  providers: [ProductsService, CategoriesService, BrandsService],
  controllers: [CategoriesController, ProductsController, BrandsController],
  exports: [ProductsService],
})
export class ProductsModule {}
