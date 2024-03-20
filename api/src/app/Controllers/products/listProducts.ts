import { Request, Response } from "express";

import { Product } from "../../models/Product";
import { database } from "../../databases";
import { TableName } from "../../databases/tableName";

export async function listProducts(req: Request, res: Response) {

	try {

		const products = await database(TableName.produto).select('*');

		console.log(products);

		res.json(products);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};