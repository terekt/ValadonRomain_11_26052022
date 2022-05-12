import { useState } from 'react';
import Banner from "../../components/Banner/Banner";
import Data from "../../data/logements";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            <Banner page="home" text="Chez vous, partout et ailleurs" />
            <Card />
        </div>
      );
}

export default Home;