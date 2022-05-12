import "./Housing.css";
import "../../data/logements"
import { useParams } from "react-router-dom";
import { housingdata } from "../../data/logements";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import Dropdown from "../../components/Dropdown/Dropdown";
import Page404 from "../404/404";

function Housing() {
    const pageId = useParams().housingId;
    const house = housingdata.find(element => element.id === pageId);

    if(house === undefined)
    {
        return (
            <>
                <Page404 />
            </>
        )
    }
    else {
    return (
        <>
            <div className="housing">
                <Carousel data={house.pictures} />
                <div className="panel">
                    <div className="panel-left">
                        <h1>{house.title}</h1>
                        <div className="location">{house.location}</div>
                        <Tag data={house.tags} />
                    </div>
                    <div className="panel-right">
                        <div className="user">
                            <div className="user-name">{house.host.name}</div>
                            <img className="imgProfile" src={house.host.picture} alt={house.host.name} />
                        </div>
                        <Rating data={house.rating} />
                    </div>
                </div>
                <div className="dropdowns">
                    <Dropdown data={house.description} title="Description" />
                    <span></span>
                    <Dropdown data={house.equipments} title="Équipement" />
                </div>
            </div>
        </>
    );
    }
}

export default Housing;