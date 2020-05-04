import { createGlobalStyle }  from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        color: ${props => (props.primaryColor ? 'black': 'white')};
        font-family: ${props => props.theme.fontFamily}
    }
`;