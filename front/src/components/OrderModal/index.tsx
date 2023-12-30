import closeIcon from '../../assets/images/close-icon.svg';
import { ModalBody, OrderDetails, Overlay } from "./styles";
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
// import testeIMG from '../../../../api/uploads/1699479152411-quatro-queijos.png'

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

const status = {
  WAITING: "🕑",
  IN_PRODUCTION: "👩‍🍳",
  DONE: "✅"

}

export function OrderModal({ visible, order }: OrderModalProps) {

  if (!visible || !order) { // condição para abrir o OrderModal
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

                <span className="quantity">{quantity}x </span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </OrderDetails>

      </ModalBody>
    </Overlay>
  )
}
