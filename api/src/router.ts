import path from 'node:path';
import { Router } from "express";
import { upload } from './app/utils/multerConfig';

import { controllers } from './app/Controllers';

export const router = Router();

// Casos de uso

// List actegory
router.get('/categories', controllers.listCategories);

// Create category (whitout dashboard)
router.post('/categories', controllers.createCategories);

// List products
router.get('/products', controllers.listProducts);

// Create products (whitout dashboard)
router.post('/products', upload.single('image'), controllers.createProduct);

// Get products by category. '/categories/:categoryId/products' = Listando todos os produtos de uma determinada categoria
router.get('/categories/:categoryId/products', controllers.listProductByCategory);

// List orders
router.get('/orders', controllers.listOrders);

// Create order
router.post('/orders', controllers.createOrder);

// Change order status
router.patch('/orders/:orderId', controllers.changeOrderStatus);

// Dele/cancel order
router.delete('/orders/:orderId', controllers.cancelOrder);


// new features coming soon