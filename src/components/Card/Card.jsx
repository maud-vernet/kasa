import { NavLink } from 'react-router-dom'
import './Card.css'

function Card({ title, id, cover }) {
    return (
        <NavLink to={'/logement/' + id} className="card-link">
            <p className="card-title">{title}</p>
            <img src={cover} alt="" aria-hidden="true" className="card-cover" />
        </NavLink>
    )
}

export default Card
