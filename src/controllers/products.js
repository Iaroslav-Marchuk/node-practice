import createHttpError from 'http-errors';
import {
  createProductService,
  deleteProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
} from '../services/products.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductsController = async (req, res) => {
  const filter = parseFilterParams(req.query);
  console.log(filter);
  const products = await getAllProductsService({
    filter,
    userId: req.user,
  });
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductByIdService(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found!');
  }
  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProductService({
    ...req.body,
    userId: req.user._id,
  });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const updateProductController = async (req, res) => {
  const { productId } = req.params;

  const product = await updateProductService(productId, req.body);

  if (!product) {
    throw createHttpError(404, 'Product not found!');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  console.log(req.params);

  const { productId } = req.params;

  const product = await deleteProductService(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found!');
  }

  res.status(204).send();
};
