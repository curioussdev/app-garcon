import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function createOrder(req: Request, res: Response) {
	try {
		const { table, products } = req.body;
		console.log(table, products)

		const order = await Order.create({ table, products });
		console.log(order)

		res.status(201).json(order); // o 201 representa que o recurso solicitado foi criado

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};