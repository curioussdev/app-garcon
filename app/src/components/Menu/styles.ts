import styled from 'styled-components/native';

export const Product = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ProductImage = styled.Image`
width: 120px;
height: 96px;
border-radius: 5px;
`;

export const PeoductDetails = styled.View`
    margin-left: 16px;
    flex: 1;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: rgba(204, 204, 204, 0.5);
    margin: 24px 0px;
`;

export const AddToCartButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    right: 0;
`;