import colors from '../../style/colors';
import styled from "styled-components";

import { NavLink } from 'react-router-dom';
import { KasaLogo } from '../KasaLogo/KasaLogo'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
    margin-bottom: 5vh;
`

const Nav = styled.nav`
    width: 309px;
    height: 34px;
    display: flex;
    justify-content: space-between;
`

const StyledNavLink = styled(NavLink)`

    font-size: 24px;
    color: ${colors.primary};
    &.active{
        text-decoration: underline;
    }
`

export const Header = () => {  

    return (
        <HeaderWrapper>
            <KasaLogo color={colors.primary} />
            <Nav>
                <StyledNavLink to='/'>Accueil</StyledNavLink>
                <StyledNavLink to='/about'>A Propos</StyledNavLink>
            </Nav>
        </HeaderWrapper>
    )
}