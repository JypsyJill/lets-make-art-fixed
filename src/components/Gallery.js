import React from "react";
import Projects from "./Projects";
import axios from "axios";

class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            searchInput: "",
            displayAll: [],
        };
    }

    componentDidMount() {
        axios.get("/api/watercolor").then((res) => {
            this.setState({
                displayAll: res.data,
            });
        });
    }

    render() {
        const mappedKits = this.state.displayAll.map((watercolor) => (
            <Projects key={watercolor.id} watercolor={watercolor} addToProj={this.props.addToProj}/>
        ));
        return <ul className='projects'>{mappedKits}</ul>;
    }
}

export default Gallery;