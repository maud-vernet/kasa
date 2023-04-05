import React, { useState } from 'react'
import aproposDetails from '../../data/a-propos'
import './Box.css'
import openingIcon from '../../assets/vector.svg'

function Boxes() {
    const [isClosed, setIsOpen] = useState(true)

    const boxes = aproposDetails.map((apropos) => (
        <div key={apropos.id} className="box">
            {isClosed ? (
                <div className="box-header">
                    <h2 className="box-title">{apropos.title}</h2>
                    <button
                        className="box-opening-system"
                        onClick={() => setIsOpen(false)}
                    >
                        <img
                            src={openingIcon}
                            alt="fermer la boîte pour cacher le détail"
                        />
                    </button>
                </div>
            ) : (
                <div>
                    <div className="box-header">
                        <h2 className="box-title">{apropos.title}</h2>
                        <button
                            className="box-opening-system"
                            onClick={() => setIsOpen(true)}
                        >
                            <img
                                src={openingIcon}
                                alt="ouvrir la boîte pour lire le détail"
                                className="closed"
                            />
                        </button>
                    </div>
                    <div className="box-description">{apropos.description}</div>
                </div>
            )}
        </div>
    ))
    return <section className="main-section">{boxes}</section>
}

export default Boxes
