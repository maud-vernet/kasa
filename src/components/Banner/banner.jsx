import './Banner.css'

function Banner(props) {
    return (
        <div id="banner">
            <div className="banner-img">
                <img src={props.image} alt="" aria-hidden="true" />
            </div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner
