import { useParams } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Loader from '../components/Loader/Loader'
import Slideshow from '../components/Slideshow/Slideshow'
import Tag from '../components/Tag/Tag'
import Rate from '../components/Rate/Rate'
import Box from '../components/Box/Box'
import P404 from './p404'

import { useState, useEffect } from 'react'

function Logement() {
    //récupération de l'id du logement dans l'url
    const logementFromUrl = useParams()

    const [logement, setLogement] = useState({})

    const [isDataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
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

    if (logement === undefined) {
        return <P404 />
    } else {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>{logement.title}</title>
                </Helmet>
                <main>
                    {isDataLoading ? (
                        <Loader />
                    ) : (
                        <div className="main-section">
                            <Slideshow pictures={logement.pictures} />

                            <div className="logement-intro">
                                <div className="logement-main-info">
                                    <h1 className="logement-title">
                                        {logement.title}
                                    </h1>
                                    <p className="logement-location">
                                        {logement.location}
                                    </p>
                                    <div className="tags">
                                        <ul className="tags-list">
                                            {logement.tags.map((tag) => (
                                                <Tag tag={tag} key={tag} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="logement-host-rate">
                                    <div className="host">
                                        <p className="host-name">
                                            {logement.host.name}
                                        </p>
                                        <div className="host-picture-container">
                                            <img
                                                className="host-picture"
                                                src={logement.host.picture}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                    <Rate rating={logement.rating} />
                                </div>
                            </div>
                            <div className="logement-details">
                                <Box
                                    title="Description"
                                    content={logement.description}
                                />
                                <Box
                                    title="Equipements"
                                    content={logement.equipments}
                                />
                            </div>
                        </div>
                    )}
                </main>
            </HelmetProvider>
        )
    }
}

export default Logement
