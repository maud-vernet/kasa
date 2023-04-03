import '../style/index.css'
import Banner from '../components/Banner/Banner'
import CardsList from '../components/Card/Card'
import bannerImage from '../assets/home-banner.png'

const title = 'Chez vous, partout et ailleurs'

function Home() {
    return (
        <main>
            <Banner image={bannerImage} title={title} />
            <CardsList />
        </main>
    )
}

export default Home
