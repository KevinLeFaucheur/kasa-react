import "../style/components/Footer.css";
import colors from "../style/colors";
import { KasaLogo } from "./KasaLogo";

export const Footer = () => {
    return (
        <footer className="footer">
            <KasaLogo color={colors.fontLight}/>
            <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}