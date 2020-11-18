import React from "react";


const Projects = ({watercolor: {name, id, img, youTubeLink}, addToProj}) => (
    <li>
        <h1>{name}</h1>
        <img src={img} alt={name}/>
        <a href={youTubeLink}>Online Tutorial</a>
        <button onClick={() => addToProj(id)}>Save to Completed projects</button>   
    </li>
)


export default Projects;