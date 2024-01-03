import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';


export const Container = styled.SafeAreaView`
   margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'}; /* seta a distância de 54px independente do dispositivo () Android / ios*/
   flex: 1;
   background: #f5f5f5; /*#FaFaFa*/
`;

export const CategoryContainer = styled.View`
    height: 73px;
    background: red;
    margin-top: 34px;
    //border-radius: 10px;
`;


export const MenuContainer = styled.View`
    background: blue;
    height: 50px;
    //border-radius: 10px;
    flex: 1;
`;


export const Footer = styled.View`
    min-height: 110px;
    background: green;
    background: #fff;
    //border-radius: 10px;
`;

export const FooterContainer = styled.SafeAreaView``;