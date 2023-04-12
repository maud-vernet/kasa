import { useState } from 'react'
import './Slideshow.css'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

function Slideshow({ pictures }) {
    const [pictureNumber, setPictureNumber] = useState(0)
    const numberOfPictures = pictures.length
    console.log(numberOfPictures)

    console.log(pictureNumber)
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
        <div>
            {pictures.map((picture, index) => (
                <div className="slideshow-container">
                    <div
                        className="slideshow-picture"
                        style={{
                            backgroundImage: `url(${pictures[pictureNumber]})`,
                        }}
                    ></div>
                </div>
            ))}
            {numberOfPictures > 1 && (
                <div className="slideshow-arrows">
                    <button onClick={leftArrowOnClick}>
                        <img src={leftArrow} alt="précédente" />
                    </button>
                    <button onClick={rightArrowOnClick}>
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
