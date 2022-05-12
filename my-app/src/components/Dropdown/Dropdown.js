import React, { useState } from "react";
import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown(props) {

    console.log(typeof props.data);


    var DropdownList = [];
    var DropdownTitle = props.title;

    if (typeof props.data === "object") {
        for (let i = 1; i < props.data.length; i++) {
            DropdownList.push(<div key={i}>{props.data[i]}</div>);
        }
    }
    else {
        DropdownList.push(<div key={1}>{props.data}</div>);
    }



    const DropdownItem = ({ expanded }) => {
        const [isCollapsed, setIsCollapsed] = React.useState(expanded);
        return (
            <>
                <button
                    className="collapse-button"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {DropdownTitle}
                    <FontAwesomeIcon icon={faAngleDown} className={`arrows ${isCollapsed ? 'arrowExpanded' : 'arrowCollapsed'}`} />
                </button>
                <div
                    className={`collapse-content ${isCollapsed ? 'expanded' : 'collapsed'}`}
                    aria-expanded={isCollapsed}
                >
                    {DropdownList}
                </div>
            </>
        )
    }

    return (
        <>
            <DropdownItem />
        </>
    )
}

export default Dropdown;