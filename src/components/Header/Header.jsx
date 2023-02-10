import { Nav } from '../Nav/Nav.styled' 
import { NavLink } from '../Link/Link.styled'
import { StyledHeader } from './Header.styled'
import { KasaLogo } from '../../style/logo'
// import { NavLink } from 'react-router-dom';

export const Header = () => {  

    return (
        <StyledHeader>
            <KasaLogo />
            <svg />
            <Nav>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')} end>Accueil</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>A Propos</NavLink>
            </Nav>
        </StyledHeader>
    )
}