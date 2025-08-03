import { ProductModel } from '../models/productModel.js';

export const getAllProductsService = ({ filter, userId }) => {
  console.log(filter);
  const productQuery = ProductModel.find({ userId });

  if (filter.category) {
    productQuery.where('category').equals(filter.category);
  }

  if (filter.maxPrice) {
    productQuery.where('price').lte(filter.maxPrice);
  }

  if (filter.minPrice) {
    productQuery.where('price').gte(filter.minPrice);
  }

  return productQuery;
};

export const getProductByIdService = (productId) => {
  return ProductModel.findOne({ _id: productId });
};

export const createProductService = (payload) => {
  return ProductModel.create(payload);
};

export const updateProductService = (productId, payload) => {
  return ProductModel.findOneAndUpdate({ _id: productId }, payload, {
    new: true,
  });
};

export const deleteProductService = (productId) => {
  return ProductModel.findOneAndDelete({ _id: productId });
};
