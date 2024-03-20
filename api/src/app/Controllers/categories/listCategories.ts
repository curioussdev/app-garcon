import { Request, Response } from "express";

import { Category } from "../../models/Category";
import { database } from "../../databases";
import { TableName } from "../../databases/tableName";

export async function listCategories(req: Request, res: Response){
	try {
		const categories = await database(TableName.categoria).select('*');

		res.json(categories);
	} catch (error) {
		console.log(error)
		res.sendStatus(500);
	}
};