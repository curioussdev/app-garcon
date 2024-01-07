import { Modal } from 'react-native';

import { Product } from '../../types/Product';
import { Image, CloseButton } from './styles';
import { Close } from '../Icons/Close';


interface ProductModalProps {
    visible: boolean;
    onClose: () => void;
    product: null | Product
}

export function ProductModal( { visible, onClose, product } : ProductModalProps){
    if(!product){
        return null;
    }

    console.log(product);
    return(
        <Modal
            visible={visible}
            animationType='slide'
            presentationStyle='pageSheet' // apenas para iphone
            onRequestClose={onClose}
        >
            <Image
                source={{
                    uri: `http://192.168.0.110:3001/uploads/${product?.imagePath}`
                }}
            >
                <CloseButton onPress={onClose}>
                    <Close />
                </CloseButton>
            </Image>
            


        </Modal>
    );
}