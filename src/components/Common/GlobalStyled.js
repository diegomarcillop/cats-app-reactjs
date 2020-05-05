import { createGlobalStyle }  from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        color: ${props => (props.primaryColor ? 'rgb(26, 26, 26)': 'white')};
        font-family: ${props => props.theme.fontFamily}
    }
`;