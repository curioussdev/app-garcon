import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrder(req: Request, res: Response){
	const orders = await Order.find();

	res.json(orders);
};