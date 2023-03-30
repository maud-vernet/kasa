import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Apropos from '../../pages/A-propos'
import Logement from '../../pages/Logement'
import P404 from '../../pages/P404'

function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A-propos" element={<Apropos />} />
            <Route path="*" element={<P404 />} />
            <Route path="/Logement/:id" element={<Logement />} />
        </Routes>
    )
}

export default RoutesList
