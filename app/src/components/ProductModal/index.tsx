import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import {
    Image,
    CloseButton,
    ModalBody,
    Header,
    IngredientsContainer,
    Ingredient,
    Footer,
    FooterContainer,
    PriceContainer
} from './styles';
import { Close } from '../Icons/Close';

import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModalProps {
    visible: boolean;
    onClose: () => void;
    product: null | Product
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
    if (!product) {
        return null;
    }

    console.log(product);
    return (
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

            <ModalBody>
                <Header>
                    <Text size={24} weight='600'>{product.name}</Text>
                    <Text color='#666' style={{ marginTop: 8 }}>{product.description}</Text>
                </Header>

                {product.ingredients.length > 0 && (
                    <IngredientsContainer>
                        <Text weight='600' color='#666'>Igredientes</Text>

                        <FlatList
                            data={product.ingredients}
                            keyExtractor={ingredient => ingredient._id}
                            style={{ marginTop: 16 }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item: ingredient }) => (
                                <Ingredient>
                                    <Text>{ingredient.icon}</Text>
                                    <Text size={14} color='#666' style={{ marginLeft: 20 }}>
                                        {ingredient.name}
                                    </Text>
                                </Ingredient>
                            )}
                        />
                    </IngredientsContainer>

                )}
            </ModalBody>
            <Footer>
                <FooterContainer>
                    <PriceContainer>
                        <Text color='#666'>Preço</Text>
                        <Text weight='600' size={20}>{formatCurrency(product.price)}</Text>
                    </PriceContainer>

                    <Button onPress={() => alert('Adicionar ao pedido')}>Adicionar ao pedido</Button>
                </FooterContainer>
            </Footer>

        </Modal>
    );
}