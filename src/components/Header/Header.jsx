import colors from '../../style/colors';
import styled from "styled-components";

import { NavLink } from 'react-router-dom';
import { KasaLogo } from '../KasaLogo/KasaLogo'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5vh;
        
    @media (max-width: 768px) {
        /* height: 32px; */
    }
`

const Nav = styled.nav`
    height: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledNavLink = styled(NavLink)`

    font-size: 24px;
    margin-left: 3rem;
    color: ${colors.primary};
    &.active{
        text-decoration: underline;
    }
        
    @media (max-width: 768px) {
        font-size: 1rem;
        margin-left: 1.5rem;
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