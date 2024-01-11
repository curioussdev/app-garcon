import { Request, Response } from "express";

import { Order } from "../../models/Order";
import { io } from "../../../index";

export async function createOrder(req: Request, res: Response) {
	try {
		const { table, products } = req.body;
		console.log(table, products)

		const order = await Order.create({ table, products });
		const orderDetails = await order.populate('products.product');

		io.emit('order@new', orderDetails);
		res.status(201).json(order); // o 201 representa que o recurso solicitado foi criado

	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};