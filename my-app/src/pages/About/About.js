import "./About.css";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown"

function About() {

    return (
        <>
            <div className="about">
                <Banner page="about" text="" />
                <div className="dropdownAbout">
                    <Dropdown data="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." title="Fiabilité" />
                    <Dropdown data="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." title="Respect" />
                    <Dropdown data="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." title="Service" />
                    <Dropdown data="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." title="Responsabilité" />
                </div>
            </div>
        </>
    )

}

export default About;