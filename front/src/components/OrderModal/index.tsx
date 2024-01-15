import closeIcon from '../../assets/images/close-icon.svg';
import { ModalBody, OrderDetails, Overlay, Actions } from "./styles";
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect } from 'react';
// import testeIMG from '../../../../api/uploads/1699479152411-quatro-queijos.png'

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose(): void;
  onCancelOrder: () => void;
  isLoading: boolean;
  onChangeOrderStatus: () => void;

}

const status = {
  WAITING: "🕑",
  IN_PRODUCTION: "👩‍🍳",
  DONE: "✅"

}

export function OrderModal({ 
  visible, 
  order, 
  onClose, 
  onCancelOrder, 
  isLoading, 
  onChangeOrderStatus }: OrderModalProps) {

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);

  if (!visible || !order) { // condição para abrir o OrderModal
    return null;
  }


  //let total = 0;
  //order.products.forEach(({ product, quantity }) => {
  // total += product.price * quantity
  //});


  const orderTeste = [];

  orderTeste.push(order.products);
 

 
  const total = Orders[0].reduce((total, products) => {
    console.log(";Preço", products.product.price, ";Quantidade:", products.quantity);
    
    return total = 3;
    
    //return total + (product.price * quantity  )
}, 0);

console.log("Total:", formatCurrency(orderTeste)) 
    return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose} >
            <img src={closeIcon} alt="icone de fechar modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {status[order.status]}

            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'} {/*simplificar com obj*/}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="div order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className='item' key={_id}>
                <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name}
                  width="60"
                  height="40"
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>


        </OrderDetails>

        <Actions>

          {order.status !== 'DONE' && (
            <button
              type='button'
              className='primary'
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === 'WAITING' && '👩‍🍳'}
                {order.status === 'IN_PRODUCTION' && '✅'}
              </span>
              <span>
                {order.status === 'WAITING' && 'Iniciar produção'}
                {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
              </span>
            </button>
          )}



          <button
            type='button'
            className='secondary'
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar Pedido
          </button>
        </Actions>

      </ModalBody>
    </Overlay>
  )
}
