import closeIcon from '../../assets/images/close-icon.svg';
import { ModalBody, OrderDetails, Overlay } from "./styles";
import { Order } from '../../types/Order';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps){

  if(!visible || !order){ // condição para abrir o OrderModal
  return null;

  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button">
            <img src={closeIcon} alt="icone de fechar modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑' }
              {order.status === 'IN_PRODUCTION' && '👩‍🍳' }
              {order.status === 'DONE' && '✅' }
            </span>
            <strong>
            {order.status === 'WAITING' && 'Fila de espera' }
              {order.status === 'IN_PRODUCTION' && 'Em produção' }
              {order.status === 'DONE' && 'Pronto!' }
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>

      </ModalBody>
    </Overlay>
    )
}
