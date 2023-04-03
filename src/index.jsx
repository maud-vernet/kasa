import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './style/index.css'
import './style/vars.css'
import RoutesList from './Router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <RoutesList />
            <Footer />
        </Router>
    </React.StrictMode>
)
