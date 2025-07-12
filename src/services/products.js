import { ProductModel } from '../db/models/product.js';

export const getAllProductsService = () => {
  return ProductModel.find();
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
