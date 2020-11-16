import React from "react";
import NewKit from "./NewKit";

const AvailKits = (props) => {
    const kitsArray = props.kits.map((watercolor, index) => (
        <NewKit
        key={`${watercolor.id}-${index}`}
        watercolor={watercolor}
        deleteProj={props.deleteProj}
        editProj={props.editProj}
        index={index}
        />
    ));
    return <ul> {kitsArray} </ul>;
};

export default AvailKits;
