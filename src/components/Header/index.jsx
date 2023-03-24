import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/test">Page 404</Link>
        </nav>
    )
}

export default Header
