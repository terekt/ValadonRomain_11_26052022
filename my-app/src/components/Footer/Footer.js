import "./Footer.css";
import logoBlack from "../../assets/logo-black.png"

function Footer() {
    return (
        <>
            <footer>
                <img src={logoBlack} alt="Kasa logo" />
                <div className="copyright">© 2020 Kasa. All rights reserved</div>
            </footer>
        </>
    );
}

export default Footer;