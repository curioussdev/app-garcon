import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response){

	try {

		const { orderId } = req.params;
		const { status } = req.body;

		if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
			return res.status(400).json({
				error: 'Status shoud be one of these: WAITING, IN_PRODUCTION, DONE'
			});
		}
		await Order.findByIdAndUpdate(orderId, { status });// altere apenas o status do pedido do id X
		res.sendStatus(204); // apenas cofirma se a request foi bem concluída ou not

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};