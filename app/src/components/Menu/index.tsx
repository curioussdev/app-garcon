import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { Text } from '../Text';

import { Product, Image, PeoductDetails} from './styles';

export function Menu(){
    return (
        <FlatList 
            data={products}
            contentContainerStyle={{ marginTop: 32}}
            keyExtractor={products => products._id}
            renderItem={({item: product }) => (
                <Product>
                    <Image />

                    <PeoductDetails>
                        <Text>{product.name}</Text>
                        <Text>{product.description}</Text>
                        <Text>{product.price}</Text>
                    </PeoductDetails>
                </Product>
            )}
        />
    );
}