import React, { Component } from "react";
import AppContext from "../AppContext";
import { withRouter } from 'react-router-dom';


class ProjectDetail extends Component {
    // state?

    // methods
    redirect = (path, evt) => {
        if(evt) evt.preventDefault;
        console.log('redirect', path)
        this.props.history.push(path);
    }


    // JSX
    render() {
        return (
            <AppContext.Consumer>
                {context => {

                    const { currentProject:project } = context;
                    return (

                        <div className="dash container app-wrapper">
                            {
                                project.author ?

                                    <div>
                                        {
                                            project && project.author
                                                && project.author.avatarUrl ?
                                                <img id="projectAuthorImg" className="circle" src={project.author.avatarUrl} />
                                                :
                                                <i  id="projectAuthorImg" className="material-icons circle">person</i>
                                        }


                                        <h4 className="avail">{project.title}</h4>
                                        <p>
                                            <strong>Repo: </strong>
                                            <a href={project.repoUrl}>{project.repoUrl}</a>
                                        </p>
                                        <p>
                                            <strong>Hosted: </strong>
                                            <a href={project.repoUrl}>{project.hostedUrl}</a>
                                        </p>
                                        <p>{project.body}</p>

                                        <div className="center-align">
                                            <button 
                                                id="testThisBtn" 
                                                className="btn btn-large"
                                                onClick={() => { this.redirect('/review') }}
                                            >
                                                Test This
                                            </button>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="divider"></div>
                                        <div className="row">
                                            <h5>Completed Tests</h5>
                                            <ul className="collapsible">
                                                {
                                                    project.tests.map((test, index) => {
                                                        console.log(test)
                                                        return (
                                                            <li className="detailTest" key={index}>
                                                                <div className="collapsible-header">
                                                                    <div>
                                                                        <img className="circle" src={test.author.avatarUrl} />
                                                                    </div>
                                                                    <div>
                                                                        <div>Tester: {test.author.displayName || test.author.githubAlias}</div>
                                                                        <div>Review: {test.body} </div>
                                                                    </div>

                                                                    <i className="material-icons iconFB">flag</i>

                                                                </div>
                                                                <div className="collapsible-body">
                                                                    <span></span>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                        </div>
                                        <h5>Comments</h5>
                                        <div className="comment-entry row">
                                            <form className="col s12">
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                        <i className="material-icons prefix">account_circle</i>
                                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                                        <label htmlFor="textarea1">Post Your Solution</label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    :

                                    this.redirect('/all')
                            }

                        </div>)
                }}
            </AppContext.Consumer>

        )
    }
}

export default withRouter(ProjectDetail);

