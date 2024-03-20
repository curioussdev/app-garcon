import { Request, Response } from "express";

import { Product } from "../../models/Product";
import { database } from "../../databases";
import { TableName } from "../../databases/tableName";

export async function createProduct(req: Request, res: Response) {
	try {
		const imagePath = req.file?.filename; // só acess ao filename se existir o file
		const { name, description, price, category, ingredients } = req.body;

		const product = await database(TableName.produto).insert({
			name,
			imagePath,
			description,
			price: Number(price),
			category,
			ingredients: ingredients ? JSON.parse(ingredients): [] // apenas faz o parse se houver algum elemento para parsear
		});

		res.status(201).json(product)
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};