import React, { useState } from 'react'
import './Box.css'
import openingIcon from '../../assets/vector.svg'

function Box({ content, title }) {
    const [boxState, updateBox] = useState(true)

    return (
        <div className="box">
            <div className="box-header">
                <h2 className="box-title">{title}</h2>
                <button
                    className="box-opening-system"
                    onClick={() => updateBox(!boxState)}
                >
                    <img
                        src={openingIcon}
                        className={`opening-button ${
                            boxState ? 'closed-button' : ''
                        }`}
                        alt="Cliquez sur ce bouton pour cacher ou afficher le détail"
                    />
                </button>
            </div>
            <div
                className={`box-description ${
                    boxState ? 'hidden-description' : ''
                }`}
            >
                {content}
            </div>
        </div>
    )
}

export default Box
