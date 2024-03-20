import * as categoria1 from './categories/createCategory';
import * as categoria2 from './categories/listCategories';

import * as orders from './orders/cancelOrder';
import * as orders2 from './orders/changeOrderStatus';
import * as orders3 from './orders/createOrder';
import * as orders4 from './orders/listOrders';

import * as product from './products/createProduct';
import * as product1 from './products/listProductByCategory';
import * as product2 from './products/listProducts'

export const controllers = {
	...categoria1,
	...categoria2,
	...orders,
	...orders2,
	...orders3,
	...orders4,
	...product,
	...product1,
	...product2,
}