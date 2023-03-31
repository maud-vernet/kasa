import { useParams } from 'react-router-dom'

function Logement() {
    const { LogementId } = useParams()
    return (
        <div>
            <h1>Logement numéro {LogementId}</h1>
        </div>
    )
}

export default Logement
