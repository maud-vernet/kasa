import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
            <div>
                <NavLink to="/">
                    <img id="logo" src={logo} alt="logo" />
                </NavLink>
            </div>
            <nav id="main-nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/A-propos">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header
