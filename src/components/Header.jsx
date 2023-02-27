import colors from '../style/colors';
import styled from "styled-components";

import { NavLink } from 'react-router-dom';
import { KasaLogo } from './KasaLogo'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
    padding: 5vh 0 5vh;
    
    @media (max-width: 768px) {
        margin: 0 1rem;
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