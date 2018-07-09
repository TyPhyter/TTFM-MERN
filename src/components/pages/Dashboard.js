import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
        <div className="dash container">
        <h4>My Projects</h4>
        <ul className=" right tabs tabs-fixed-width">
            <li className="tab">
                <a className="active" href="#current">Current</a>
            </li>
            <li className="tab">
                <a href="#closed">Closed</a>
            </li>
        </ul>
        <div id="current" className="col s12">
            <ul className="collection">
                {{#each Projects}} {{#if this.dataValues.title}} {{#unless this.dataValues.closed }}
                <li className="collection-item avatar">
                    <a href="/projects/{{this.dataValues.id}}">
                        {{#if this.dataValues.authorAvatarUrl}}
                        <img className="circle" src="{{ this.dataValues.authorAvatarUrl }}"> 
                        {{/if}} 
                        {{#unless this.dataValues.authorAvatarUrl}}
                        <i className="material-icons circle">person</i>
                        {{/unless}}
                        <h5 className="truncate">{{ this.dataValues.title }}</h5>
                        <a href="#!" className="secondary-content">
                            <i className="material-icons light-green-text accent-3">arrow_forward</i>
                        </a>
                    </a>
                </li>
                {{/unless}}{{/if}} {{/each}} 
                {{#if Projects.[0].dataValues.title}}
                <div style="text-align:center; margin-top:50px">
                    <a style="margin-top:25px" className="btn btn-large" href="/projects/post/{{ id }}">Post a Project</a>
                </div>
                {{/if}}
                {{#unless Projects.[0].dataValues.title}}
                <div style="text-align:center; margin-top:50px">
                    <div>Looks like you haven't posted any projects yet!</div>
                    <a style="margin-top:25px" className="btn btn-large" href="/projects/post/{{ id }}">Let's Fix That</a>
                </div>
                {{/unless}}
            </ul>
        </div>
        <div id="closed" class="col s12">
            <ul class="collection">
                {{#each Projects}} {{#if this.dataValues.title}} {{#if this.dataValues.closed }}
                <li class="collection-item avatar">
                    <a href="/projects/{{this.dataValues.id}}">
                        <i class="material-icons circle">person</i>
                        <h5 class="truncate">{{ this.dataValues.title }}</h5>
                        <a href="#!" class="secondary-content">
                            <i class="material-icons light-green-text accent-3">arrow_forward</i>
                        </a>
                    </a>
                </li>
                {{/if}} {{/if}} {{/each}}
            </ul>
            {{!--
            <div class="row summary">
                <div id="checks" class="col m2 center-align">
                    <i class="small material-icons">visibility</i>
                    <br/>## VIEWS
                </div>
                <div id="checks" class="col m2 center-align">
                    <i class="small material-icons">check</i>
                    <br/>## CHECKS
                </div>
                <div id="question" class="col m8">
                    <h5>Name of Query/Problem Title Goes Here</h5>
                </div>
            </div> --}}
            <div class="divider"></div>
        </div>
    </div>
    );
  }
}

export default Dashboard;