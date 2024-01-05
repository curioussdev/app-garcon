import { FlatList, } from 'react-native';
import { formatCurrency } from '../../utils/formatCurrency';

import { products } from '../../mocks/products';
import { Text } from '../Text';

import { Product, ProductImage, PeoductDetails, Separator, AddToCartButton } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
    return (
        <FlatList
            data={products}
            style={{ marginTop: 32 }}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            keyExtractor={product => product._id}
            renderItem={({ item: product }) => {
                return (

                    <Product>
                        <ProductImage
                            source={{
                                uri: `http://192.168.100.237:3001/uploads/${product.imagePath}`
                            }}
                        />

                        <PeoductDetails>
                            <Text weight='600'>{product.name}</Text>
                            <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                                {product.description}
                            </Text>
                            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
                        </PeoductDetails>

                        <AddToCartButton>
                            <PlusCircle />
                        </AddToCartButton>
                    </Product>
                );
            }}
        />
    );
}