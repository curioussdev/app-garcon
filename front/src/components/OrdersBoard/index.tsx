import { Order } from '../../types/order';
import { Board, OrdersContainer } from './styles'

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrderBoardProps) {

  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>


      {orders.length > 0 && (
        <OrdersContainer>
        {orders.map((orders) => (
          <button type="button" key={orders._id}>
            <strong>Mesa {orders.table}</strong>
            <span>{orders.products.length} itens</span>
          </button>
        ))}
      </OrdersContainer>
      )}
    </Board>
  )
}

