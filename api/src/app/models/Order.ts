import { model, Schema } from "mongoose";

export const Order = model('Order', new Schema({
	table: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'], // O enums erve para cada pedido atender apenas aos três estados citados no Array
		default: 'WAITING' // o estado inicial de toos os pedidos deve ser o mencionado no default
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	products:{
		required: true,
		type: [{
			product: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},
			quatity: {
				type: Number,
				default: 1,
			}
		}]
	}
}));