import React, { useState } from 'react'
import './Box.css'
import openingIcon from '../../assets/vector.svg'

function Box({ content, title }) {
    const [isClosed, setIsOpen] = useState(true)

    return (
        <div className="box">
            {isClosed ? (
                <div className="box-header">
                    <h2 className="box-title">{title}</h2>
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
                        <h2 className="box-title">{title}</h2>
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
                    <div className="box-description">{content}</div>
                </div>
            )}
        </div>
    )
}

export default Box
