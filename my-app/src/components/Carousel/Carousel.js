import "./Carousel.css";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function Carousel(props) {

    const [imageCurrent, imageCurrentSet] = useState(1);

    function pictureState(e){
        if (e > props.data.length){
            imageCurrentSet(1);
        }
        else if (e < 1){
            imageCurrentSet(props.data.length);
        }
        else {
            imageCurrentSet(e);
        }
    }

    return(
        <div className="carousel">
            <img className="carousel" src={props.data[imageCurrent-1]} alt={`number ${imageCurrent}`} />
            <FontAwesomeIcon className={`carousel-icon carousel-icon-previous ${props.data.length === 1 && "hide"}`} onClick={() => pictureState(imageCurrent-1)} icon={faAngleDown} />
            <FontAwesomeIcon className={`carousel-icon carousel-icon-next ${props.data.length === 1 && "hide"}`} onClick={() => pictureState(imageCurrent+1)} icon={faAngleDown} />
            <p className="carousel-count">{imageCurrent}/{props.data.length}</p>
        </div>
    );


}

export default Carousel;