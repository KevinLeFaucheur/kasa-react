import styled from "styled-components";
import colors from "../style/colors";
import { KasaLogo } from "./KasaLogo";

const StyledFooter = styled.footer`
    width: 100%;
    height: 209px;
    margin-top: auto;
    background-color: ${ colors.backgroundFooter };
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const StyledCopyright = styled.p`
    color: white;
    font-size: 1.5rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const Footer = () => {
    return (
        <StyledFooter>
            <KasaLogo color={colors.fontLight}/>
            <StyledCopyright>© 2020 Kasa. All rights reserved</StyledCopyright>
        </StyledFooter>
    )
}