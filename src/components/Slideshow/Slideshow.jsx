import { useState } from 'react'
import './Slideshow.css'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

function Slideshow({ pictures }) {
    const [pictureNumber, setPictureNumber] = useState(0)
    const numberOfPictures = pictures.length

    function leftArrowOnClick() {
        //si on est sur la première image
        if (pictureNumber === 0) {
            setPictureNumber(numberOfPictures - 1) //retour à la dernière image
        } else {
            setPictureNumber(pictureNumber - 1) // sinon image actuelle - 1
        }
    }

    function rightArrowOnClick() {
        //si on est sur la dernière image
        if (pictureNumber >= numberOfPictures - 1) {
            setPictureNumber(0) //retour à la première image
        } else {
            setPictureNumber(pictureNumber + 1) // sinon image actuelle + 1
        }
    }
    return (
        <div className="slideshow-container">
            <div
                className="slideshow-picture"
                style={{
                    backgroundImage: `url(${pictures[pictureNumber]})`,
                }}
            ></div>

            {numberOfPictures > 1 && (
                <div className="slideshow-arrows">
                    <button onClick={leftArrowOnClick} className="left-arrow">
                        <img src={leftArrow} alt="précédente" />
                    </button>
                    <button onClick={rightArrowOnClick} className="right-arrow">
                        <img src={rightArrow} alt="suivante" />
                    </button>
                </div>
            )}
            <div className="slideshow-counter">
                {pictureNumber + 1}/{numberOfPictures}
            </div>
        </div>
    )
}

export default Slideshow
