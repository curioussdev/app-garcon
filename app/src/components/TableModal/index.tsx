import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Text } from '../Text';
import { Close } from '../Icons/Close';

import { Overlay, ModalBody, ModalForm, ModalHeader, Input } from './styles';
import { Button } from '../Button';
import { useState } from 'react';

interface TableModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}

// o behavior serve para inferir limites ao teclado face a abertura de modais

export function Table( { visible, onClose, onSave }: TableModalProps ) {
    const [inputValue, setInputValue] = useState('');
    

    function handleSave(){
        setInputValue('');
        onSave(inputValue);
        onClose();
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType='fade'
        >
            <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <ModalBody>
                    <ModalHeader>
                        <Text weight='600'>Informe a mesa</Text>

                        <TouchableOpacity onPress={onClose}>
                            <Close color="#666" />
                        </TouchableOpacity>
                    </ModalHeader>

                    <ModalForm>
                        <Input
                        value={inputValue}
                            placeholder="Número da mesa"
                            placeholderTextColor="#666"
                            keyboardType='number-pad'
                            onChangeText={setInputValue}
                        />
                        <Button onPress={handleSave} disabled={inputValue.length === 0}>
                            Salvar
                        </Button>
                    </ModalForm>
                </ModalBody>
            </Overlay>

        </Modal>
    );
}