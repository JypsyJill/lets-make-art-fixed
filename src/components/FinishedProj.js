import React, { Component } from "react";

class FinishedProj extends Component {
    constructor (props) {
        super(props)

        this.state = {
            dateUpdate: props.watercolor.datePainted,
            imgUpdate: props.watercolor.img,
            toggleEdit: false,
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    toggleEditFn = () => {
        this.setState({ toggleEdit: !this.state.toggleEdit });
    };

    render() {
        const { dateUpdate, imgUpdate, toggleEdit } = this.state
        const { datePainted, img, name, id } = this.props.watercolor
        const { handleChange, toggleEditFn } = this
        const { editProj } = this.props

        return (
            <li>
                <h1>{`${name} I'm done with this one!`}</h1>

                {toggleEdit ? 
                    (
                        <div>
                            <input name="dateUpdate" value={dateUpdate} onChange={handleChange} />
                            <input name="imgUpdate" value={imgUpdate} onChange={handleChange} />
                            <div>
                                <button onClick={() => { editProj(id, dateUpdate, imgUpdate); toggleEditFn() }}>Save</button>
                                <button>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2>{`Date Painted: ${datePainted}`}</h2>
                            <img src={img} alt={name}/>
                            <button onClick={toggleEditFn}>Edit</button>
                        </div>
                    )
                } 
            </li>
        );
    }
}

export default FinishedProj;