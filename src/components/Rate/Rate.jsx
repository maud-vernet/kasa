import emptyStarIcon from '../../assets/empty-star-icon.svg'
import filledStarIcon from '../../assets/filled-star-icon.svg'
import './Rate.css'

function Rate({ rating }) {
    const rateRange = [1, 2, 3, 4, 5]
    const rateValue = rating
    return (
        <div className="rate">
            {rateRange.map((rangeElem) =>
                rateValue >= rangeElem ? (
                    <img
                        key={rangeElem.toString()}
                        src={filledStarIcon}
                        alt="Full Star"
                    />
                ) : (
                    <img
                        key={rangeElem.toString()}
                        src={emptyStarIcon}
                        alt="Empty Star"
                    />
                )
            )}
        </div>
    )
}

export default Rate
