import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main id="p404">
            <h1>404</h1>
            <p>Oups! la page que vous demandez n'existe pas</p>
            <Link to="/">Retour à la page d'accueil</Link>
        </main>
    )
}

export default Error
