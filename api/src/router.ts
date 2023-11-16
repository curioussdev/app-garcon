import path from 'node:path';
import { Router } from "express";
import multer from 'multer';

import { createCategories } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProductByCategory } from './app/useCases/categories/listProductByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';


export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		//definir o nome padrão do arquivos feitos upload com o stimeStamp do Date.now()
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`)
		},
	}),
});

// Casos de uso

// List actegory
router.get('/categories', listCategories);

// Create category (whitout dashboard)
router.post('/categories', createCategories);

// List products
router.get('/products', listProducts);

// Create products (whitout dashboard)
router.post('/products', upload.single('image'), createProduct);

// Get products by category. '/categories/:categoryId/products' = Listando todos os produtos de uma determinada categoria
router.get('/categories/:categoryId/products', listProductByCategory);

// List orders
router.get('/orders', listOrders)

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', (req, res)=>{
	res.send('OK');
});

// Dele/cancel order
router.delete('/orders/:orderId', (req, res)=>{
	res.send('OK');
});