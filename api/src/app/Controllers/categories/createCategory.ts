import { Request, Response } from "express";

import { Category } from "../../models/Category";
import { database } from "../../databases";
import { TableName } from "../../databases/tableName";

export async function createCategories(req: Request, res: Response) {
	try {
		const { icon, name } = req.body;

		if(!name){
			return res.status(400).json({
				error: 'name is required!'
			});
		};

		const category = await database(TableName.categoria).insert({ name, icon })

		res.status(201).json(category); // o 201 representa que o recurso solicitado foi criado

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};