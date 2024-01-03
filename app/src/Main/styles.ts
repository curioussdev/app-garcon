import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';


export const Container = styled.SafeAreaView`
    margin: 50px 30px;
   //margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'}; /* seta a distância de 54px independente do dispositivo () Android / ios*/
`;

export const CategoryContainer = styled.View``;


export const MenuContainer = styled.View``;


export const Footer = styled.View``;