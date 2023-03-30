import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/index.css'
import Home from './pages/Home'
import Apropos from './pages/A-propos'
import Logement from './pages/Logement'
import P404 from './pages/P404'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/A-propos" element={<Apropos />} />
                <Route path="*" element={<P404 />} />
                <Route path="/Logement/:id" element={<Logement />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
