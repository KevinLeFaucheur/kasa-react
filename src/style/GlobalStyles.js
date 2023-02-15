import { createGlobalStyle } from "styled-components"; 
import colors from './colors'

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html {
        position: relative;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: ${colors.primary};
        min-height: 100%;
        margin: 40px 100px;
    }

    a, a:link, a:visited, a:focus, a:hover{
        text-decoration: none;
    }
`