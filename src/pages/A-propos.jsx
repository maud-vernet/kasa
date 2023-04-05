import Banner from '../components/Banner/Banner'
import Boxes from '../components/Box/Box'
import bannerImage from '../assets/a-propos-banner.png'
const title = 'A propos'

function Apropos() {
    return (
        <main>
            <Banner image={bannerImage} title={title} />
            <Boxes />
        </main>
    )
}

export default Apropos
