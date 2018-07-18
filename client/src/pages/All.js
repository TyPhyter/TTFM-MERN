import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../AppContext';

let localUri = 'http://localhost:3002';
let productionUri = 'https://ttfm-api.herokuapp.com';

class All extends Component {

    constructor() {
        super();
        this.state = {
            projects: [],
        };
    }

    redirect = (path, _id, context) => {
        console.log('get project and redirect', path);
        fetch(localUri + '/projects/' + _id)
            .then(res => {
                return res.json();
            }).then(data => {
                context.setCurrentProject(data[0]);
                this.props.history.push(path);
            });
    }

    componentDidMount() {
        fetch(localUri + '/projects')
            .then(res => {
                return res.json();
            }).then(data => {
                // console.log(data);
                let projects = data;
                this.setState({ projects: projects });
                console.log("state", this.state.projects);
            })
    }
    render() {
        return (
            <AppContext.Consumer>
                {context => {
                    return (
                        <div>
                            <div className="container dash app-wrapper">
                                <h4 className="avail">Open Projects</h4>
                                <ul className=" right tabs tabs-fixed-width">
                                    <li className="tab">
                                        <a className="active" href="#trending">Trending</a>
                                    </li>
                                    <li className="tab">
                                        <a href="#today">Today</a>
                                    </li>
                                    <li className="tab">
                                        <a href="#week">This Week</a>
                                    </li>
                                    <li className="tab">
                                        <a href="#month">This Month</a>
                                    </li>
                                </ul>
                                <div id="trending" className="col s12">
                                    <ul className="collection">
                                        {
                                            this.state.projects.map((project, index) => {
                                                return (
                                                    <li key={index} className="collection-item avatar">
                                                        <div onClick={() => { this.redirect('/detail', project._id, context) }}>
                                                            {
                                                                project.author.avatarUrl ?
                                                                    <img className="circle" src={project.author.avatarUrl} />
                                                                    :
                                                                    <i className="material-icons circle">person</i>
                                                            }
                                                            <h5 className="truncate">{project.title}</h5>
                                                            <a href="#" className="secondary-content">
                                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                                            </a>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                {/* <div id="today" className="col s12">
                                    <ul className="collection">
                                        <li className="collection-item avatar">
                                            <img src="./img/profile.jpg" alt="" className="circle" />
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="week" className="col s12">
                                    <ul className="collection">
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle">person</i>
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle">person</i>
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="month" className="col s12">
                                    <ul className="collection">
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle">person</i>
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle">person</i>
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <img src="./img/profile.jpg" alt="" className="circle" />
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle">person</i>
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <img src="./img/profile.jpg" alt="" className="circle" />
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle">person</i>
                                            <h5>Question Title Goes Here</h5>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    )
                }}
            </AppContext.Consumer>
        );
    }
}

export default withRouter(All);