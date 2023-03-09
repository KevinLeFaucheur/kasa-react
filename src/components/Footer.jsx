import styled from "styled-components";
import colors from "../style/colors";
import * as typography from '../style/typography';
import { KasaLogo } from "./KasaLogo";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 209px;
    margin-top: auto;
    background-color: ${ colors.backgroundFooter };

    svg { height: 40px; }
`

const StyledCopyright = styled.p`
    color: white;
    ${typography.d_footer}
    
    @media (max-width: 768px) {
        ${typography.m_footer}
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