import React from "react";
import FinishedProj from "./FinishedProj";


const AvailKits = (props) => {
    const kitsArray = props.kits.map((watercolor, index) => (
        <FinishedProj 
        key={`${watercolor.id}-${index}`}
        // watercolor={watercolor}
        deleteProj={props.deleteProj}
        editProj={props.editProj}
        index={index}
        />
    ));
    return <ul> {kitsArray} </ul>;
};

export default AvailKits;
