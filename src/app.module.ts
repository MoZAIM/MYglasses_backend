
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './entities/product.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'nextdb',
      entities: [
        Product,
        Category
      ],
      synchronize: true,
    }),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
