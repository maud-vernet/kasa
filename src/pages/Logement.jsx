import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import Tag from '../components/Tag/Tag'
import Rate from '../components/Rate/Rate'

import { useState, useEffect } from 'react'

function Logement() {
    //récupération de l'id du logement dans l'url
    const logementFromUrl = useParams()

    const [logement, setLogement] = useState([])

    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setDataLoading(true)

            try {
                const response = await fetch('/logements.json')
                const logements = await response.json()
                const logement = logements.find(
                    (logement) => logement.id === logementFromUrl.id
                )

                setLogement(logement)
            } catch (err) {
                console.log(err)
            } finally {
                setDataLoading(false)
            }
        }

        fetchData()
    }, [logementFromUrl.id])
    console.log(logement)
    return (
        <main>
            {isDataLoading ? (
                <Loader />
            ) : (
                <div className="main-section">
                    <div className="logement-main-info">
                        <div className="logement-info">
                            <h1 className="logement-title">{logement.title}</h1>
                            <p className="logement-location">
                                {logement.location}
                            </p>
                        </div>
                        <div className="host">
                            <p className="host-name">{logement.host.name}</p>
                            <div className="host-picture-container">
                                <img
                                    className="host-picture"
                                    src={logement.host.picture}
                                    alt=""
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="logement-tags-rate">
                        <div className="tags">
                            <ul class="tags-list">
                                {logement.tags.map((tag) => (
                                    <Tag tag={tag} key={tag} />
                                ))}
                            </ul>
                        </div>
                        <div className="rate">
                            <Rate />
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Logement
