import Banner from '../components/Banner/Banner'
import bannerImage from '../assets/home-banner.png'
const title = 'Chez vous, partout et ailleurs'

function Home() {
    return (
        <main>
            <Banner image={bannerImage} title={title} />
        </main>
    )
}

export default Home
