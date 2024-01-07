import { Modal } from 'react-native';
import { Text } from '../Text';


interface ProductModalProps {
    visible: boolean;
    onClose: () => void;
}

export function ProductModal( { visible, onClose } : ProductModalProps){
    return(
        <Modal
            visible={visible}
            animationType='slide'
            presentationStyle='pageSheet' // apenas para iphone
            onRequestClose={onClose}
        >
            <Text>Product Modal</Text>


        </Modal>
    );
}