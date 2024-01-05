/*

import { products } from '../../mocks/products';

import { formatCurrency } from '../../utils/formatCurrency';

import { Text } from '../Text';
import { Product, ProductImage, PeoductDetails, AddToCartButton } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';


export function renderItem(){
    return(
        <Product>
                        <ProductImage 
                            source={{
                                uri: `http://192.168.100.237:3001/uploads/${product.imagePath}`
                            }}
                        />

                        <PeoductDetails>
                            <Text weight='600'>{product.name}</Text>
                            <Text size={14} color='#666' style={{ marginVertical: 8}}>
                                {product.description}
                            </Text>
                            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
                        </PeoductDetails>

                        <AddToCartButton>
                            <PlusCircle />
                        </AddToCartButton>
                    </Product>
    )
}

*/