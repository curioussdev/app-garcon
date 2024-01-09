import axios from 'axios';

import {
    Container,
    CategoryContainer,
    MenuContainer,
    Footer,
    FooterContainer,
    CenteredContainer
} from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { Table } from '../components/TableModal';
import { useEffect, useState } from 'react';
import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { ActivityIndicator } from 'react-native';

// import { products as mockProducts } from '../mocks/products';
// import { categories as mockCategories } from '../mocks/categories';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';
import { Category } from '../types/Category';

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    

    useEffect(() => {
        Promise.all([
            axios.get('http://192.168.100.237:3001/categories'),
            axios.get('http://192.168.100.237:3001/products')
        ]).then(([categoriesResponse, productsResponse]) => {
            setCategories(categoriesResponse.data);
            setProducts(productsResponse.data);
            setIsLoading(false);
        });



/*

        axios.get('http://192.168.100.237:3001/categories').then((response) => {
            setCategories(response.data);
            
        });

        axios.get('http://192.168.100.237:3001/products').then((response) => {
            setProducts(response.data);
            
        });

        */
    }, []);


    function handleSaveTable(table: string) {
        setSelectedTable(table);
    }

    function handleCancelOrder() {
        setSelectedTable('');
        setCartItems([]);
    }

    function handleConfirmOrder() {
        handleCancelOrder();
    }

    function handleAddToCart(product: Product) {
        if (!selectedTable) {
            setIsTableModalVisible(true);
        }

        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

            if (itemIndex < 0) {
                return prevState.concat({
                    quantity: 1,
                    product,
                });
            }

            const newCartItems = [...prevState]; // lógica para adicionar 1 item ao carrinho por vez
            const item = newCartItems[itemIndex];

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity + 1,
            };

            return newCartItems;
        });
    }

    function handleDecrementCartItem(product: Product) {
        setCartItems((prevState) => {
            const itemIndex = prevState.findIndex(
                cartItem => cartItem.product._id === product._id
            );

            const item = prevState[itemIndex];
            const newCartItems = [...prevState];

            if (item.quantity === 1) {
                newCartItems.splice(itemIndex, 1);

                return newCartItems;
            }

            newCartItems[itemIndex] = {
                ...item,
                quantity: item.quantity - 1,
            };
            return newCartItems;

        });

    }


    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    onCancelOrder={handleCancelOrder}
                />

                {isLoading && (
                    <CenteredContainer>
                        <ActivityIndicator
                            color="#D73035"
                            size="large"
                        />
                    </CenteredContainer>
                )}

                {!isLoading && (
                    <>
                        <CategoryContainer>
                            <Categories 
                                categories={categories}
                            />
                        </CategoryContainer>

                        {products.length > 0 ? (
                            <MenuContainer>
                                <Menu
                                    onAddToCart={handleAddToCart}
                                    products={products}
                                />
                            </MenuContainer>
                        ) :(
                            <CenteredContainer>
                                <Empty />
                                <Text color='#666' style={{ marginTop: 24}}>
                                    Nenhum produto foi encontrado!
                                </Text>
                            </CenteredContainer>
                        )}
                    </>
                )}


            </Container>

            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button onPress={() => setIsTableModalVisible(true)}
                            disabled={isLoading}
                        >
                            Novo Pedido
                        </Button>
                    )}

                    {selectedTable && (
                        <Cart
                            cartItems={cartItems}
                            onAdd={handleAddToCart}
                            onDecrement={handleDecrementCartItem}
                            onConfirmOrder={handleConfirmOrder}
                        />
                    )}
                </FooterContainer>
            </Footer>

            <Table
                visible={isTableModalVisible}
                onClose={() => setIsTableModalVisible(false)}
                onSave={handleSaveTable}
            />
        </>
    );
}
