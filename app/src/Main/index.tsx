import {
    Container,
    CategoryContainer,
    MenuContainer,
    Footer,
    FooterContainer
} from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { Table } from '../components/TableModal';
import { useState } from 'react';
import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';

export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');
    const [cartItems, setCartItems] = useState<CartItem[]>([
      

  ]);


    function handleSaveTable(table: string) {
        setSelectedTable(table);
    }

    function handleCancelOrder() {
        setSelectedTable('');
    }

    function handleAddToCart(product: Product) {
        if(!selectedTable){
            setIsTableModalVisible(true);
        }

        alert(product.name);
    }

    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    onCancelOrder={handleCancelOrder}
                />

                <CategoryContainer>
                    <Categories />
                </CategoryContainer>

                <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} />
                </MenuContainer>


            </Container>

            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button onPress={() => setIsTableModalVisible(true)}>
                            Novo Pedido
                        </Button>
                    )}

                    {selectedTable && (
                        <Cart cartItems={cartItems} />
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
