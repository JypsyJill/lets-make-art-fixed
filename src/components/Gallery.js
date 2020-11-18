import React from "react";
import Projects from "./Projects";

class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            searchInput: "",
        };
    }

    render() {
        const mappedKits = this.props.kits.map(watercolor => (
            <Projects key={`${watercolor.name}:${watercolor.id}`} watercolor={watercolor} addToProj={this.props.addToProj}/>
        ))
        return <ul className='projects'>{mappedKits}</ul>
    }
}

export default Gallery;