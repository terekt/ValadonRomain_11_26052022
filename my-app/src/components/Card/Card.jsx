import "./Card.css";
import { housingdata } from "../../data/logements";

function Card() {
    return (
        <>
            <div className="card-container">
                {housingdata.map((data, key) => {
                    return (
                        <div class="card" key={key}>
                            <img src={data.pictures[0]} alt="" />
                            <div class="title">
                                {data.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Card;