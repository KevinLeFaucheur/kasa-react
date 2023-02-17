import styled from "styled-components";
import colors from "../../style/colors";
import { KasaLogo } from "../KasaLogo/KasaLogo";

const StyledFooter = styled.footer`
    position: absolute;
    left: 0;
    /* bottom: 0; */
    width: 100%;
    height: 209px;
    background-color: ${ colors.backgroundFooter };
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const StyledCopyright = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 500;
`

export const Footer = () => {
    return (
        <StyledFooter>
            <KasaLogo color={colors.fontLight}/>
            <StyledCopyright>© 2020 Kasa. All rights reserved</StyledCopyright>
        </StyledFooter>
    )
}