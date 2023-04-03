import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Apropos from './pages/a-propos'
import Logement from './pages/logement'
import P404 from './pages/p404'

function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<P404 />} />
        </Routes>
    )
}

export default RoutesList
