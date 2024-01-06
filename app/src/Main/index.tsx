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


export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');

    function handleSaveTable(table: string) {
        setSelectedTable(table);
    }

    function handleCancelOrder() {
        setSelectedTable('');
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
                    <Menu />
                </MenuContainer>


            </Container>

            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button onPress={() => setIsTableModalVisible(true)}>
                            Novo Pedido
                        </Button>
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
