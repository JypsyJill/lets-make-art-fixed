import React, { Component } from "react";

class NewKit extends Component {
    constructor (props) {
        super(props);

        this.state = {
            datePainted: props.watercolor.date,
            toggleEdit: false,
        };
    }

    handleChange = (event) => {
        this.setState({ datePainted: event.target.value });
    };

    toggleEdit = () => {
        this.setState({ toggleEdit: !this.state.toggleEdit });
    };

    render() {
        const { watercolor } = this.props;
        return (
            <li>
                <h1>
                    { watercolor.name}{" "}
                    <span
                        onClick={(e) => {
                            e.stopPropagation();
                            this.props.deleteProj(this.props.index);
                        }}
                    >
                        {` I'm done with this one! `}
                    </span>    
                </h1>

                {this.state.toggleEdit ? (
                    <input
                    value={this.state.datePainted}
                    onChange={this.handleChange}
                    />
                ) : (
                    <h2> Date Painted: {watercolor.datePainted}</h2>
                )}

                {this.state.toggleEdit ? (
                    <div>
                        <button
                            onClick={() => {
                                this.props.editProj(
                                    this.props.index,
                                    this.state.datePainted
                                );
                                this.toggleEdit();
                            }}
                        >
                            Save
                        </button>
                        <button
                            onClick={() => {
                                this.setState({ datePainted: watercolor.date });
                                this.toggleEdit();
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                ) : null}

                <button onClick={this.toggleEdit}>Edit</button>
                <h2>{watercolor.img}</h2>
            </li>
        );
    }
}

export default NewKit;