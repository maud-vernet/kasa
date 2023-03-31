import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <header>
            <img id="logo" src={logo} alt="logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/A-propos">A propos</Link>
            </nav>
        </header>
    )
}

export default Header
