import { useState, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Banner from '../components/Banner/Banner'
import Box from '../components/Box/Box'
import Loader from '../components/Loader/Loader'
import bannerImage from '../assets/a-propos-banner.png'

function Apropos() {
    const [aproposData, setAproposData] = useState([])
    const [isDataLoading, setDataLoading] = useState(true)
    const bannerTitle = 'A propos'

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/a-propos.json')
                const aproposData = await response.json()

                setAproposData(aproposData)
            } catch (err) {
                console.log(err)
            } finally {
                setDataLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <HelmetProvider>
            <Helmet>
                <title>A propos</title>
            </Helmet>
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
        </HelmetProvider>
    )
}

export default Apropos
