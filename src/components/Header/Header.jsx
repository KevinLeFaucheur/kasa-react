import { Nav } from '../Nav/Nav' 

export const Header = () => {
    return (
        <div>
            <img src="../public/images/logo.png" alt="Kasa logo" className="logo"/>
            <Nav />
        </div>
    )
}