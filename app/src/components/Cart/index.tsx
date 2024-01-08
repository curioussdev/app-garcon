import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';

import { 
    Item,
     ProductContainer, 
     Actions, 
     Image, 
     QuantityContainer,
     ProductDetails,
     Summary,
     TotalContainer
} from './styles';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';
import { Product } from '../../types/Product';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { useState } from 'react';

interface CartProps {
    cartItems: CartItem[];
    onAdd: (product: Product) => void;
    onDecrement: (product: Product) => void;
    onConfirmOrder: () => void;
    
}


export function Cart({ cartItems, onAdd, onDecrement, onConfirmOrder}: CartProps) {
    const [isModalVisible, SetIsModalVisible ] = useState(false);

    const total = cartItems.reduce((acc, cartItem) => { // total a pagar 
        return acc + cartItem.quantity * cartItem.product.price;
    }, 0);

    function handleConfirmOrder(){
        SetIsModalVisible(true);
    }

    function handleOk(){
        onConfirmOrder();
        SetIsModalVisible(false);
    }

    return (
        <>

        <OrderConfirmedModal 
            visible={isModalVisible}
            onOk={handleOk}
        />
        <Text size={20} weight='600'>🛒 Carrinho de pedido</Text>
        
        { cartItems.length > 0 && (
            <FlatList
            data={cartItems}
            keyExtractor={cartItem => cartItem.product._id}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 20, maxHeight: 140}}
            renderItem={({ item: cartItem }) => (
                <Item>
                    <ProductContainer>
                        <Image
                            source={{
                                uri: `http://192.168.0.110:3001/uploads/${cartItem.product.imagePath}`
                            }}
                        />

                        <QuantityContainer>
                            <Text size={14} color='#666'>
                                {cartItem.quantity}x
                            </Text>
                        </QuantityContainer>

                        <ProductDetails>
                            <Text size={14} weight='600'>{cartItem.product.name}</Text>
                            <Text size={14} style={{marginTop: 4}} >{formatCurrency(cartItem.product.price)}</Text>
                        </ProductDetails>
                    </ProductContainer>

                    <Actions>
                        <TouchableOpacity 
                            style={{ marginRight: 24}}
                            onPress={() => onAdd(cartItem.product)}
                            >
                            <PlusCircle />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                            <MinusCircle />
                        </TouchableOpacity>
                    </Actions>
                </Item>
            )}
        />
        )}

        <Summary>
            <TotalContainer>
                {cartItems.length > 0 ? (
                    <>
                    <Text color='#666'>Total</Text>
                    <Text size={16} weight='600'>{formatCurrency(total)}</Text>
                    </>
                ): ( 
                    <Text color='#999'>o seu carrinho  está vazio</Text>
                )}
            </TotalContainer>

            <Button onPress={handleConfirmOrder}
                disabled={cartItems.length === 0}
            >
                confirmar pedido
            </Button> 
                
            

        </Summary>

        </>
    );
}