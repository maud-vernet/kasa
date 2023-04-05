import logements from '../../data/logements'
import { NavLink } from 'react-router-dom'
import './Card.css'

function CardsList() {
    const logementsList = logements.map((logement) => (
        <NavLink to="/logement/:id" className="card" key={logement.id}>
            <h2 class="card-title">{logement.title}</h2>
        </NavLink>
    ))
    return (
        <section id="cards" className="main-section">
            {logementsList}
        </section>
    )
}

export default CardsList
