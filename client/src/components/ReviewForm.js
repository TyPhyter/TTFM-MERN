import React, {Component} from "react";

export default class ReviewForm extends Component {
    // state
    state = {
        textarea1: "",
        numValue: ""
        
    }

    handleChange = event => {
        this.setState ({
            numValue: event.target.value
        });
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

    }



    render () {
        return (
            <div className="container app-wrapper">
        <h2 id="projectName">Project Title</h2>
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="row">
                        <div className="card-header">
                            <h2 className="feedback-heading">How Did It Go?</h2>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <ul>
                                        <li className="col s4">
                                            <label>
                                                <input 
                                                    className="with-gap"
                                                    type="radio" 
                                                    checked ={this.state.numValue === "5"}
                                                    value="5" 
                                                    onChange={this.handleChange}
                                                />
                                                <span>Everything worked!</span>
                                            </label>
                                        </li>
                                        <li className="col s4">
                                            <label>
                                                <input 
                                                    className="with-gap" 
                                                    type="radio" 
                                                    value="3" 
                                                    checked ={this.state.numValue === "3"}
                                                    onChange={this.handleChange}
                                                />
                                                <span>Looks good, but has a few issues.</span>
                                            </label>
                                        </li>
                                        <li className="col s4">
                                            <label>
                                                <input 
                                                    className="with-gap" 
                                                    type="radio" 
                                                    value="1" 
                                                    checked ={this.state.numValue === "1"}
                                                    onChange={this.handleChange}
                                                />
                                                <span>So broke, it eats sleep for dinner.</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea 
                                            id="textarea1" className="materialize-textarea"
                                            value= {this.state.textarea1}
                                            name="textarea1"
                                            onChange={this.handleInputChange}
                                            type="text">
                                        </textarea>
                                        <label for="textarea1">Specific Feedback and Comments</label>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-light btn-small" type="submit" name="action">Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }

}