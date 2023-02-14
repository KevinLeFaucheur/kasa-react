import { Nav } from '../Nav/Nav.styled' 
import { StyledNavLink } from '../NavLink/NavLink.styled'
// import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled'
import { KasaLogo } from '../../style/logo'
import colors from '../../style/colors';

export const Header = () => {  

    return (
        <StyledHeader>
            <KasaLogo />
            <Nav>
                <StyledNavLink to='/'>Accueil</StyledNavLink>
                <StyledNavLink to='/about'>A Propos</StyledNavLink>
            </Nav>
        </StyledHeader>
    )
}