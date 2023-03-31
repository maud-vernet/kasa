import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './style/index.css'
import './style/vars.css'
import RoutesList from './components/Router'
import Header from './components/Header'
import Footer from './components/Footer'

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
