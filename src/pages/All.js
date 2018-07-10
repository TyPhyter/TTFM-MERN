import React, { Component } from 'react'

export default class All extends Component {
  render() {
    return (
    <div className="dash container">
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
                {{#each this}} {{#if this.title}} {{#unless this.closed }}
                <li className="collection-item avatar">
                    <a href="/projects/{{this.id}}">
                        {{#if this.authorAvatarUrl}}
                        <img className="circle" src="{{ this.authorAvatarUrl }}">
                        {{/if}}
                        {{#unless this.authorAvatarUrl}}
                        <i className="material-icons circle">person</i>
                        {{/unless}}
                        <h5 className="truncate">{{ this.title }}</h5>
                        <a href="#!" className="secondary-content">
                            <i className="material-icons light-green-text accent-3">arrow_forward</i>
                        </a>
                    </a>
                </li>
                {{/unless}}{{/if}} {{/each}} 
        </div>
        <div id="today" className="col s12">
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src="./img/profile.jpg" alt="" className="circle">
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
                    <img src="./img/profile.jpg" alt="" className="circle">
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
                    <img src="./img/profile.jpg" alt="" className="circle">
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
    </div>
    );
  }
}

export default All;