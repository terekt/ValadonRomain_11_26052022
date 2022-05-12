import "./Header.css";
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <img src={Logo} alt="Kasa logo" />
                <nav className="menu">
                    <ul>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Acceuil</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/About">A Propos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;