import { useState } from 'react'

import { Order } from '../../../src/types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrderBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenOrderModal(order: Order) {
    setIsModalVisible(true)
    console.log(order)
  }

  return (
    <Board>

      <OrderModal visible={isModalVisible} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>


      {orders.length > 0 && ( // Renderização de condicional
        <OrdersContainer>
          {orders.map((orders) => (
            <button type="button" key={orders._id} onClick={() => handleOpenOrderModal(orders)}>
              <strong>Mesa {orders.table}</strong>
              <span>{orders.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}

