import "./Header.css";
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div class="header">
                <img src={Logo} alt="Kasa logo" />
                <nav class="menu">
                    <ul>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Acceuil</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/About">A Propos</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;