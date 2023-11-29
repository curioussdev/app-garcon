import { Overlay } from "./styles";

interface OrderModalProps {
  visible: boolean;
}

export function OrderModal({ visible }: OrderModalProps){

  if(!visible){ // condição para abrir o OrderModal
  return null;
  }

  return (
    <Overlay>
      <h1>Overlay</h1>
    </Overlay>
    )
}
