import React, { useState } from 'react'
import './Box.css'
import openingIcon from '../../assets/vector.svg'

function Box({ content, title }) {
    const [boxState, updateBox] = useState(true)
    console.log(content)
    const isArray = Array.isArray(content)
    console.log(isArray)

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
                {isArray ? (
                    <ul>
                        {content.map((equipment) => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    )
}

export default Box
