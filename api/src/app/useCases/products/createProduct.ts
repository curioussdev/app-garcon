import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
	try {

		console.log(req.file)
console.log(req.body)
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};