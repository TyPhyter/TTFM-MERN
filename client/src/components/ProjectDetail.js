import React, {Component} from "react";


export default class ProjectDetail extends Component {
    // state?

    // methods


    // JSX
    render (){
        return (
            <div className="dash container app-wrapper">
                <div id="projId">something</div>
                <img className="circle" src="{{ authorAvatarUrl }}"/> 
                <i className="material-icons circle">person</i>
                <h4 className="avail"></h4>
                <p><strong>Repo: </strong><a href="{{ repoUrl }}">repoURL</a></p>
                <p><strong>Hosted: </strong><a href="{{ hostedUrl }}">hostedURL</a></p>
                <p>body</p>

                <div className="center-align">
                    <button id="testThisBtn" className="btn btn-large">Test This</button>
                </div>
                <br/>
                <br/>
                <div className="divider"></div>
                <div className="row">
                    <h5>Completed Tests</h5>
                    <ul className="collapsible">
                        <li>
                            <div className="collapsible-header">
                                <div>
                                    <img className="circle" src="{{ this.dataValues.authorAvatarUrl }}"/> 
                                </div>
                                <div>
                                    Tester:
                                    <div>Score:</div>
                                </div>
                                <div>
                                    <i className="material-icons iconFB">flag</i>
                                </div>
                            </div>
                            <div className="collapsible-body">
                                <span></span>
                            </div>
                        </li>
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
        )
    }
}


