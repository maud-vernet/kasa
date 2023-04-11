import './Tag.css'

function Tag({ tag, index }) {
    return (
        <li className="tag" key={`${index}`}>
            {tag}
        </li>
    )
}

export default Tag
