import React, { useState } from 'react'
import aproposDetails from '../../data/a-propos'
import './Box.css'
import openingIcon from '../../assets/vector.svg'

function Boxes() {
    const boxes = aproposDetails.map((apropos) => (
        <div key={apropos.id} className="box">
            <div className="box-header">
                <h2 className="box-title">{apropos.title}</h2>
                <button className="box-opening-system">
                    <img
                        src={openingIcon}
                        alt="ouvrir la boîte pour lire le détail"
                    />
                </button>
            </div>
            <div className="box-description">{apropos.description}</div>
        </div>
    ))
    return <section className="main-section">{boxes}</section>
}

export default Boxes
