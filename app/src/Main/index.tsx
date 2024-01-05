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
import { TableModal } from '../components/TableModal';
import { useState } from 'react';


export function Main() {
    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
   

    return (
        <>
        <Container>
            <Header />

            <CategoryContainer>
                <Categories />
            </CategoryContainer>

            <MenuContainer>
                <Menu />
            </MenuContainer>
            
            
        </Container>

        <Footer>
            <FooterContainer>
                <Button onPress={() => setIsTableModalVisible(true)}>
                    Novo Pedido
                </Button>
            </FooterContainer>
        </Footer>

        <TableModal 
            visible={isTableModalVisible}
            onClose={() => setIsTableModalVisible(false)}
        />
        </>
    );
}
