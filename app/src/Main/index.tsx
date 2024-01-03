import { Container, CategoryContainer, MenuContainer, Footer } from './styles';
import { Header } from '../components/Header';


export function Main(){
    return(
        <Container>
            <Header />
            
            <CategoryContainer></CategoryContainer>

            <MenuContainer></MenuContainer>
            
            <Footer></Footer>
        </Container>
    );
}
