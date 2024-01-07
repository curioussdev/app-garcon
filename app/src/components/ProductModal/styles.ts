import styled from 'styled-components/native';


export const Image = styled.ImageBackground`
    width: 100%;
    height: 200px;
    
`;

export const CloseButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 16px ;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 24px;
    top: 24px;
`;