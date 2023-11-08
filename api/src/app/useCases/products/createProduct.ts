import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
	try {
		const imagePath = req.file?.filename; // só acess ao filename se existir o file
		const { name, description, price, category, ingredients } = req.body;

		const product = await Product.create({
			name,
			imagePath,
			description,
			price: Number(price),
			category,
			ingredients: JSON.parse(ingredients)
		});

		res.status(201).json(product)
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};