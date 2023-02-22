import { Module } from '@nestjs/common';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsController } from './controllers/brands/brands.controller';
import { BrandsService } from './services/brands/brands.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';

@Module({
  providers: [ProductsService, CategoriesService, BrandsService],
  controllers: [CategoriesController, ProductsController, BrandsController],
  exports: [ProductsService],
})
export class ProductsModule {}
