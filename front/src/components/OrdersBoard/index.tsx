import { useState } from 'react';
import { toast } from 'react-toastify';

import { Order } from '../../../src/types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';
import { api } from '../../utils/api';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder }: OrderBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenOrderModal(order: Order) {
    setIsModalVisible(true);
    console.log(order)
    setSelectedOrder(order);
  }

  function handleCloseMoldal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await new Promise( resolve => setTimeout(resolve, 1000) );
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder!.table} foi cancelado!` );
  
    onCancelOrder(selectedOrder!._id)
    setIsLoading(false);
    setIsModalVisible(false);

  }

  return (
    <Board>

      <OrderModal
      visible={isModalVisible}
      order={selectedOrder}
      onClose={handleCloseMoldal}
      onCancelOrder={handleCancelOrder}
      isLoading={isLoading}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>


      {orders.length > 0 && ( // Renderização de condicional
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenOrderModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}

