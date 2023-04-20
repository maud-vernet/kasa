import { useState } from 'react'
import './Slideshow.css'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

function Slideshow({ pictures }) {
    const [pictureNumber, setPictureNumber] = useState(0)
    const numberOfPictures = pictures.length

    function leftArrowOnClick() {
        if (pictureNumber === 0) {
            setPictureNumber(numberOfPictures - 1)
        } else {
            setPictureNumber(pictureNumber - 1)
        }
    }

    function rightArrowOnClick() {
        if (pictureNumber >= numberOfPictures - 1) {
            setPictureNumber(0)
        } else {
            setPictureNumber(pictureNumber + 1)
        }
    }
    return (
        <div className="slideshow-container">
            <ul className="slideshow-pictures">
                {pictures.map((index) => (
                    <li
                        key={index}
                        className="slideshow-picture"
                        style={{
                            backgroundImage: `url(${pictures[pictureNumber]})`,
                        }}
                    ></li>
                ))}
            </ul>

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
