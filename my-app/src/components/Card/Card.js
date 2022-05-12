import "./Card.css";
import { housingdata } from "../../data/logements";
import { Link } from "react-router-dom";

function Card() {
    return (
        <>
            <div className="card-container">
                {housingdata.map((data, key) => {
                    return (
                        <Link to={`/location/${data.id}`} className="card" key={data.id}>
                            <img src={data.pictures[0]} alt="" />
                            <div className="title">
                                {data.title}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default Card;