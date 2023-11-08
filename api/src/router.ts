import path from 'node:path';
import { Router } from "express";
import multer from 'multer';

import { createCategories } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";


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
router.get('/categories/:categoryId/products', (req, res)=>{
	res.send('OK')
});

// List orders
router.get('/orders', (req, res)=>{
	res.send('OK');
});

// Create order
router.post('/orders', (req, res)=>{
	res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res)=>{
	res.send('OK');
});

// Dele/cancel order
router.delete('/orders/:orderId', (req, res)=>{
	res.send('OK');
});