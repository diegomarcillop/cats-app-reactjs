import { createGlobalStyle }  from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        color: ${props => (props.primaryColor ? 'white': 'black')};
        font-family: ${props => props.theme.fontFamily}
    }
`;