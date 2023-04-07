import { NavLink } from 'react-router-dom'
import './Card.css'

function Card({ title, id, cover }) {
    return (
        <NavLink to={'/logement/:' + id} className="card" key={id}>
            <h2 className="card-title">{title}</h2>
            <img src={cover} alt="aperçu du logement" className="card-cover" />
        </NavLink>
    )
}

export default Card
