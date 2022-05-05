import "./Banner.css";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";

function Banner(props) {

    var bannerImg = null;

    if (props.page === "home") {
        bannerImg = banner1;
    }
    
    if (props.page === "about") {
        bannerImg = banner2;
    }

    return(
        <div class="banner">
            <img src={bannerImg} alt={props.text} />
            <h1 class="bannerTitle">{props.text}</h1>
        </div>
    );
}

export default Banner;