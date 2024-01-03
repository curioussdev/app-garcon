import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';


export const Container = styled.SafeAreaView`
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'}; /* seta a distância de 54px independente do dispositivo () Android / ios*/
`;