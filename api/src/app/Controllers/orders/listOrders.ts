import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response){

	try {
		const orders = await Order.find()
		.sort({ createdAt: 1}) // ordena sempre o pedido mais antigo esteja em primeiro e os mais recentes em último
		.populate('products.product');
		// busca não somente o product por id, mas os detalhes do producto em si

		res.status(201).json(orders);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};