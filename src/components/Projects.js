import React from "react";

const Projects = (props) => {
    return (
     <li
        onClick={() => {
            props.addToProj(props.watercolor.id);
        }}
    >
        <h1>{props.watercolor.name}</h1>
        <h2>{props.watercolor.img}</h2>
    </li>
    );
};

export default Projects;