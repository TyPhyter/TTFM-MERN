import React, { Component } from "react";
import AppContext from '../AppContext';
import { withRouter } from 'react-router-dom';

class ReviewForm extends Component {
    // state
    state = {
        textarea1: "",

    }



    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    redirect = (path) => {
        console.log('post test and redirect', path);
        this.props.history.push(path);
    }

    postTest = (evt, context) => {
        evt.preventDefault();
        fetch("http://localhost:3002/tests", {
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            method: "POST",
            body: JSON.stringify({
                body: this.state.textarea1,
                author: context.user._id,
                project: context.currentProject._id
            })
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
                context.currentProject.tests.push(myJson);
                context.setCurrentProject(context.currentProject);
                this.redirect('/detail');
            });
    }


    render() {
        return (
            <AppContext.Consumer>
                {context => {
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
                                                                    <input className="with-gap" name="group3" type="radio" value="5" />
                                                                    <span>Everything worked!</span>
                                                                </label>
                                                            </li>
                                                            <li className="col s4">
                                                                <label>
                                                                    <input className="with-gap" name="group3" type="radio" value="3" />
                                                                    <span>Looks good, but has a few issues.</span>
                                                                </label>
                                                            </li>
                                                            <li className="col s4">
                                                                <label>
                                                                    <input className="with-gap" name="group3" type="radio" value="1" />
                                                                    <span>So broke, it eats sleep for dinner.</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <textarea
                                                                id="textarea1" className="materialize-textarea"
                                                                value={this.state.textarea1}
                                                                name="textarea1"
                                                                onChange={this.handleInputChange}
                                                                type="text">
                                                            </textarea>
                                                            <label for="textarea1">Specific Feedback and Comments</label>
                                                        </div>
                                                    </div>
                                                    <button className="btn waves-effect waves-light btn-small" 
                                                        onClick={(e)=> {this.postTest(e, context)}} name="action">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </AppContext.Consumer>
        )
    }

}

export default withRouter(ReviewForm);