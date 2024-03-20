import { Request, Response } from "express";

import { Product } from "../../models/Product";
import { database } from "../../databases";
import { TableName } from "../../databases/tableName";

export async function listProductByCategory(req: Request, res: Response){
	try {

		const { categoryId } = req.params;

		const products = await database(TableName.produto).select('*').where('category', '=', categoryId  );

		res.json(products);
	} catch (error) {
		console.log(error)
		res.sendStatus(500);
	}
};