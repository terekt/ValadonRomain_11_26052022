import "./Tag.css";

function Tag(props) {
    var tags = [];
    for (let i = 0; i < props.data.length; i++) {
        tags.push(<div className="tag">{props.data[i]}</div>)
    }

    return (
        <>
            {tags}

        </>
    )
}

export default Tag;