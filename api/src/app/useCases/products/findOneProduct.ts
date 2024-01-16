import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function findOneProduct(req: Request, res: Response) {

	try {

		const products = await Product.findById(req.params.id);

		console.log(products);

		res.json(products);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};