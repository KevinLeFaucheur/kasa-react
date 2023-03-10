import colors from '../style/colors';
import styled from "styled-components";
import * as typography from '../style/typography'

import { NavLink } from 'react-router-dom';
import { KasaLogo } from './KasaLogo'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
    padding: 5vh 0 5vh;
    
    @media (max-width: 768px) {
        padding: 20px 0 20px;
        margin: 0 1rem;
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 34px;
`

const StyledNavLink = styled(NavLink)`

    ${typography.d_navbar}
    margin-left: 3rem;
    color: ${colors.primary};
    
    &.active{
        text-decoration: underline;
    }
        
    @media (max-width: 768px) {
        ${typography.m_navbar}
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