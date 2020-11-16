import React from "react";

const Projects = ({watercolor: {name, id, img}, addToProj}) => (
    <li onClick={() => addToProj(id)}>
        <h1>{name}</h1>
        <img src={img} alt={name}/>
    </li>
)


export default Projects;