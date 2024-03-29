import  socketIo from 'socket.io-client';

import { useState, useEffect } from 'react';
import { Order } from '../../../src/types/Order';
import { api } from '../../utils/api';
import { OrdersBoard } from "../OrdersBoard"
import { Container } from "./styles"


export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });
    
    socket.on('order@new', (order) => {
      setOrders(prevState => prevState.concat(order));
      //console.log('Novo pedido cadastrado no banco de dados in real time', order);
    })
    
  }, []);

  useEffect(() => {
    api.get('/orders')
    .then(({data}) => {
      setOrders(data);

      console.log(data)
    });
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string){
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderSatatusChange(orderId: string, status: Order['status']){
    setOrders((printState) => printState.map((order) => (
    order._id === orderId ? { ...order, status} : order
    ))  );
  }


  return (
    <Container>
      <OrdersBoard
        icon='🕑'
        title='Fila de espera'
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChandeOrderStatus={handleOrderSatatusChange}
      />

      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChandeOrderStatus={handleOrderSatatusChange}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChandeOrderStatus={handleOrderSatatusChange}
      />

      {/** <OrdersBoard
        icon="🔴"
        title="Cancelados"
        orders={orders}
      />*/}
      

    </Container>
  )
}
