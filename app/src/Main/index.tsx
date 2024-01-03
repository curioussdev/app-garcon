import { 
    Container, 
    CategoryContainer, 
    MenuContainer, 
    Footer,
    FooterContainer
} from './styles';
import { Header } from '../components/Header';


export function Main() {
    return (
        <>
        <Container>
            <Header />

            <CategoryContainer></CategoryContainer>

            <MenuContainer></MenuContainer>
            
            
        </Container>

        <Footer>
            <FooterContainer></FooterContainer>
        </Footer>
        </>
    );
}
