import '../style/index.css'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import Loader from '../components/Loader/Loader'
import bannerImage from '../assets/home-banner.png'

import { useState, useEffect } from 'react'

const title = 'Chez vous, partout et ailleurs'

function Home() {
    const [logements, setLogements] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        setDataLoading(true)
        fetch('logements.json')
            .then((response) => response.json())
            .then((logements) => {
                setLogements(logements)
            })
        setDataLoading(false)
    }, [])

    return (
        <main>
            <Banner image={bannerImage} title={title} />
            {isDataLoading ? (
                <Loader />
            ) : (
                <section className="main-section">
                    <ul id="cards">
                        {logements.map((logement) => (
                            <li className="card" key={logement.id}>
                                <Card
                                    key={logement.id}
                                    title={logement.title}
                                    id={logement.id}
                                    cover={logement.cover}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </main>
    )
}

export default Home
