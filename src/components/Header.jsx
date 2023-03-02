import '../style/components/Header.css';
import { NavLink } from 'react-router-dom';
import { KasaLogo } from './KasaLogo';
import colors from '../style/colors';

export const Header = () => {  
    return (
        <header className='header'>
            <KasaLogo color={colors.primary}/>
            <nav className='header-nav'>
                <NavLink className='header-navlink' to='/'>Accueil</NavLink>
                <NavLink className='header-navlink' to='/about'>A Propos</NavLink>
            </nav>
        </header>
    )
}