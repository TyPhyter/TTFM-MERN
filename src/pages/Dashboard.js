import React, { Component } from 'react';

 class Dashboard extends Component {
  render() {
    return (
        <div>
            <div className="container dash app-wrapper">
                <h4>My Projects</h4>
                <ul className=" right tabs tabs-fixed-width">
                    <li className="tab">
                        <a className="active" href="#current">Current</a>
                    </li>
                    <li className="tab">
                        <a href="#closed">Closed</a>
                    </li>
                </ul>
            </div>
            <div id="current" className="col s12">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <a href="/projects/{{this.dataValues.id}}">
                            <img className="circle" src="{{ this.dataValues.authorAvatarUrl }}"/>
                            <i className="material-icons circle">person</i>
                            <h5 className="truncate"></h5>
                            <a href="#!" className="secondary-content">
                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                            </a>
                        </a>
                    </li>
                    <div >
                        <a  className="btn btn-large" href="/projects/post/{{ id }}">Post a Project</a>
                    </div>
                
                    <div>
                        <div>Looks like you haven't posted any projects yet!</div>
                        <a className="btn btn-large" href="/projects/post/{{ id }}">Let's Fix That</a>
                    </div>
                </ul>
            </div>
            <div id="closed" className="col s12">
                <ul class="collection">
                    <li className="collection-item avatar">
                        <a href="/projects/{{this.dataValues.id}}">
                            <i className="material-icons circle">person</i>
                            <h5 class="truncate">something</h5>
                            <a href="#!" class="secondary-content">
                                <i className="material-icons light-green-text accent-3">arrow_forward</i>
                            </a>
                        </a>
                    </li>
                </ul>
                <div class="divider"></div>
            </div>
        </div>
    );
  }
}

export default Dashboard;
