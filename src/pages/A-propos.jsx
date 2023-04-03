import Banner from '../components/Banner/Banner'
import bannerImage from '../assets/a-propos-banner.png'
const title = 'A propos'

function Apropos() {
    return (
        <main>
            <Banner image={bannerImage} title={title} />
        </main>
    )
}

export default Apropos
