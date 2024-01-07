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

interface CartProps {
    cartItems: CartItem[];
}


export function Cart({ cartItems }: CartProps) {
    return (
        <>
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
                        <TouchableOpacity style={{ marginRight: 24}}>
                            <PlusCircle />
                        </TouchableOpacity>

                        <TouchableOpacity>
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
                    <Text size={20} weight='600'>{formatCurrency(6600)}</Text>
                    </>
                ): ( 
                    <Text color='#999'>o seu carrinho vazio</Text>
                )}
            </TotalContainer>

            <Button onPress={()=> alert('confirmar pedido')}
                disabled={cartItems.length === 0}
            >
                confirmar pedido
            </Button> 
                
            

        </Summary>

        </>
    );
}