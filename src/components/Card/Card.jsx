import { NavLink } from 'react-router-dom'
import './Card.css'

function Card({ title, id, cover }) {
    return (
        <NavLink to={'/logement/' + id} className="card">
            <h2 className="card-title">{title}</h2>
            <img src={cover} alt="" aria-hidden="true" className="card-cover" />
        </NavLink>
    )
}

export default Card
