import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export function isValidId(req, res, next) {
  const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    throw createHttpError(400, 'Bad Request');
  }
  next();
}
