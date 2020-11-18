import React from "react";


const Projects = ({watercolor: {name, id, img, youTubeLink}, addToProj}) => (
    <li onClick={() => addToProj(id)}>
        <h1>{name}</h1>
        <img src={img} alt={name}/>
        <a href={youTubeLink}>
            Online Tutorial
        </a>
        
    </li>
)


export default Projects;