import { Nav } from '../Nav/Nav.styled' 
import { Link } from '../Link/Link.styled'

export const Header = () => {
    return (
        <div>
            <img src="../public/images/logo.png" alt="Kasa logo" className="logo"/>
            <Nav>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A Propos</Link>
            </Nav>
        </div>
    )
}