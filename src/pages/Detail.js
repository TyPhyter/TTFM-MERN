import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
        <div className="dash container">
        <div id="projId" style="display:none;">{{ id }}</div>
        {{#if authorAvatarUrl}}
        <img style="width:250px" className="circle" src="{{ authorAvatarUrl }}"/> 
        {{/if}} 
        {{#unless authorAvatarUrl}}
        <i className="material-icons circle">person</i>
        {{/unless}}
        <h4 className="avail">{{ title }}</h4>
        <p><strong>Repo: </strong><a href="{{ repoUrl }}">{{ repoUrl }}</a></p>
        <p><strong>Hosted: </strong><a href="{{ hostedUrl }}">{{ hostedUrl }}</a></p>
        <p>{{ body }}</p>

        <div className="center-align">
            <button id="testThisBtn" className="btn btn-large">Test This</button>
        </div>
        <br/>
        <br/>

        <div className="divider"></div>
        <div className="row">
            <h5>Completed Tests</h5>
            <ul className="collapsible">
                {{#each Tests}}
                <li>
                    <div className="collapsible-header">
                        <div>
                            {{#if this.dataValues.authorAvatarUrl}}
                            <img style="width:50px; margin-right:10px" className="circle" src="{{ this.dataValues.authorAvatarUrl }}"/> 
                            {{/if}} 
                            {{#unless this.dataValues.authorAvatarUrl}}
                            <i className="material-icons circle">person</i>
                            {{/unless}}
                        </div>
                        <div style="width:90%">
                            Tester: {{this.dataValues.authorDisplayName}}
                            <div>Score: {{this.dataValues.score}}/5</div>
                        </div>
                        <div>
                            <i style="color: #777"className="material-icons iconFB">flag</i>
                        </div>
                    </div>
                    <div className="collapsible-body">
                        <span>{{this.dataValues.body}}</span>
                    </div>
                </li>
                {{/each}}
            </ul>
        </div>
        <h5>Comments</h5>
        <div className="comment-entry row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label for="textarea1">Post Your Solution</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
  }
}

export default Detail;