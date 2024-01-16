import { useState } from 'react';
import { FlatList, } from 'react-native';
import { formatCurrency } from '../../utils/formatCurrency';

import { Product } from '../../types/Product';
import { Text } from '../Text';

import { 
    ProductContainer, 
    ProductImage, 
    PeoductDetails, 
    Separator, 
    AddToCartButton 
} from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';


interface MenuProps {
    onAddToCart: (product: Product) => void;
    products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
    const [ isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

    function handleOpenModal(product: Product) {
        setIsModalVisible(true);
        setSelectedProduct(product);
    }

    return (
        <>
            <ProductModal 
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                product={selectedProduct}
                onAddToCart={onAddToCart}
            />
            
            <FlatList
                data={products}
                style={{ marginTop: 32 }}
                ItemSeparatorComponent={Separator}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                keyExtractor={product => product._id}
                renderItem={({ item: product }) => {
                    return (

                        <ProductContainer onPress={() => handleOpenModal(product)}>
                            <ProductImage
                                source={{
                                    uri: `http://192.168.18.81:3001/uploads/${product.imagePath}`
                                }}
                            />

                            <PeoductDetails>
                                <Text weight='600'>{product.name}</Text>
                                <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                                    {product.description}
                                </Text>
                                <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
                            </PeoductDetails>

                            <AddToCartButton onPress={() => onAddToCart(product)}>
                                <PlusCircle />
                            </AddToCartButton>
                        </ProductContainer>
                    );
                }}
            />


            
        </>

    );
}