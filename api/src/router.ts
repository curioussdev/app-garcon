import { Router } from "express";


export const router = Router();

// Casos de uso

// List actegory
router.get('/categories', (req, res)=>{
	res.send('OK');
});

// Create category (whitout dashboard)
router.post('/categories', (req, res)=>{
	res.send('OK');
});

// List products
router.get('/products', (req, res)=> {
	res.send('OK');
});

// Create products (whitout dashboard)
router.post('/products', (req, res)=>{
	res.send('OK');
});

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