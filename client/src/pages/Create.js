import React, { Component } from 'react';
import AppContext from '../AppContext';
import { withRouter } from 'react-router-dom';

class Create extends Component {

    state = {
        title: "",
        repoUrl: "",
        hostedUrl: "",
        bodyText: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }




    render() {
        return (
            <AppContext.Consumer>
                {context => (
                    <div>
                        <div className="container app-wrapper">
                            <div className="row center-align">
                                <h4>Post a Project</h4>
                            </div>
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                value={this.state.title}
                                                name="title"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="A brief description of your project"
                                            />
                                            <label htmlFor="project_title">Project Title</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input
                                                value={this.state.repoUrl}
                                                name="repoUrl"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="https://github.com/your_info"
                                            />
                                            <label htmlFor="repoUrl">Repo URL:</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input
                                                value={this.state.hostedUrl}
                                                name="hostedUrl"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="https://yoursite.com/your_info"
                                            />
                                            <label htmlFor="hostedUrl">Hosted URL:</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <textarea
                                                value={this.state.bodyText}
                                                name="bodyText"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="Tell us how to interact with your project and what you want to know about it">
                                            </textarea>
                                            <label htmlFor="bodyText">About your project</label>
                                        </div>
                                        <div className="input-field col s12 center-align">
                                            <button className="btn btn-large" id="post">POST</button>
                                            <a className="waves-effect waves-light btn btn-large modal-trigger" href="#repoPicker">Repo Picker</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="repoPicker" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                    <h4>Choose a Repository</h4>

                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-green btn">Choose</a>
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </AppContext.Consumer>

        );
    }
}

export default withRouter(Create);
