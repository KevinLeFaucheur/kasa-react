import { createGlobalStyle } from "styled-components"; 
import colors from './colors'

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    #root{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: ${colors.primary};
        min-height: 100vh;
        margin: 0;
    }

    ul, h2, p{
        margin: 0;
    }

    a, a:link, a:visited, a:focus, a:hover{
        text-decoration: none;
    }
`