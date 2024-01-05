import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../Text';
import { Close } from '../Icons/Close';

import { Overlay, ModalBody, ModalForm, ModalHeader, Input } from './styles';
import { Button } from '../Button';


// o behavior serve para inferir limites ao teclado face a abertura de modais

export function TableModal() {
    return (
        <Modal
            transparent
        >
            <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <ModalBody>
                    <ModalHeader>
                        <Text weight='600'>Informe a mesa</Text>

                        <TouchableOpacity>
                            <Close color="#666" />
                        </TouchableOpacity>
                    </ModalHeader>

                    <ModalForm>
                        <Input
                            placeholder="Número da mesa"
                            placeholderTextColor="#666"
                            keyboardType='number-pad'
                        />

                        <Input
                            placeholder="Detalhes do pedido"
                            placeholderTextColor="#666"
                            keyboardType='ascii-capable'
                        />
                        <Button onPress={() => alert('Salvou')}>Salvar</Button>
                    </ModalForm>
                </ModalBody>
            </Overlay>

        </Modal>
    );
}