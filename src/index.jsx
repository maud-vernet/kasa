import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './style/index.css'
import RoutesList from './components/Router'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <RoutesList />
        </Router>
    </React.StrictMode>
)
