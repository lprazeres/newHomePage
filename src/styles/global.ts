import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${props => props.theme['white']};
    color: ${props => props.theme['gray-300']};;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    line-height: 160%;
    font-size: 1rem;
}
`;

