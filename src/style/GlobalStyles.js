import { createGlobalStyle } from "styled-components"; 
import colors from './colors'

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        color: ${colors.primary};
        margin: 0;
        padding: 40px 100px;
    }

    a:visited {
        color: ${colors.primary};
    }
`