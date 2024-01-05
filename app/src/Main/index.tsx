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


export function Main() {
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
                <Button />
            </FooterContainer>
        </Footer>
        </>
    );
}
