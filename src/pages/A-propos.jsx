import { useState, useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import Box from '../components/Box/Box'
import Loader from '../components/Loader/Loader'
import bannerImage from '../assets/a-propos-banner.png'
const bannerTitle = 'A propos'

function Apropos() {
    const [aproposData, setAproposData] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        setDataLoading(true)
        fetch('a-propos.json')
            .then((response) => response.json())
            .then((aproposData) => {
                setAproposData(aproposData)
            })
        setDataLoading(false)
    }, [])

    return (
        <main>
            <Banner image={bannerImage} title={bannerTitle} />
            <section className="main-section a-propos">
                {isDataLoading ? (
                    <Loader />
                ) : (
                    aproposData.map((apropos) => (
                        <Box
                            key={apropos.id}
                            title={apropos.title}
                            content={apropos.description}
                        />
                    ))
                )}
            </section>
        </main>
    )
}

export default Apropos
