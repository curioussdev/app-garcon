import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response){

	try {
		const orders = await Order.find();

		res.status(201).json(orders);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};