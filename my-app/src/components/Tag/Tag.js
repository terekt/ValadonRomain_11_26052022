import "./Tag.css";

function Tag(props) {
    var tags = [];
    for (let i = 0; i < props.data.length; i++) {
        tags.push(<div className="tag"  key={i}>{props.data[i]}</div>)
    }

    return (
        <>
            <div className="tags">
                {tags}
            </div>
        </>
    )
}

export default Tag;