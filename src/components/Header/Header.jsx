import { Nav } from '../Nav/Nav.styled' 
import { StyledNavLink } from '../NavLink/NavLink.styled'
import { StyledHeader } from './Header.styled'
import { KasaLogo } from '../KasaLogo/KasaLogo'
import colors from '../../style/colors';

export const Header = () => {  

    return (
        <StyledHeader>
            <KasaLogo color={colors.primary} />
            <Nav>
                <StyledNavLink to='/'>Accueil</StyledNavLink>
                <StyledNavLink to='/about'>A Propos</StyledNavLink>
            </Nav>
        </StyledHeader>
    )
}