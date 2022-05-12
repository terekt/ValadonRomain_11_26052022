import "./Rating.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";

function Rating(props) {

    var stars = [];
    for (let i = 1; i < 6; i++){
        if(i <= props.data){
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="starColored" />);
        }
        else{
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star" />);
        }
    }

    return (
        <>
        <div className="rating">
            {stars}
        </div>
        </>
    )

}

export default Rating;