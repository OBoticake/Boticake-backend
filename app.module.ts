import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Thor13579',
      database: 'boticake',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [ProductsController],
})
export class AppModule {}
