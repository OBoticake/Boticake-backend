import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../models/product.model';

@Controller('products')
export class ProductsController {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  @Get()
  async getAllProducts() {
    return this.productModel.findAll();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productModel.findByPk(id);
  }

  @Post()
  async createProduct(@Body() product: any) {
    return this.productModel.create(product);
  }  

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() product: Product) {
    await this.productModel.update(product, { where: { id } });
    return this.productModel.findByPk(id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    await this.productModel.destroy({ where: { id } });
    return { deleted: true };
  }
}
