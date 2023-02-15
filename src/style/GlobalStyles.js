import { createGlobalStyle } from "styled-components"; 
import colors from './colors'

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: ${colors.primary};
        min-height: 100%;
        margin: 40px 100px;
        /* padding: ; */
    }

    /* a:visited {
        color: ${colors.primary};
    }*/

    a, a:link, a:visited, a:focus, a:hover{
        text-decoration: none;
    }

    /*a:active {
        text-decoration: underline;
    } */
`