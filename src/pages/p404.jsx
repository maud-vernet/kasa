import { Helmet, HelmetProvider } from 'react-helmet-async'
import Error from '../components/Error/Error'

function P404() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Page 404</title>
            </Helmet>
            <Error />
        </HelmetProvider>
    )
}

export default P404
