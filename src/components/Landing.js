import React, { Component } from "react";

const OAuth = window.OAuth;

export default class Landing extends Component {

    githubClickHandler = (evt) => {
        evt.preventDefault();
        let githubToken;
        let githubUser;
        let serverResponse;

        OAuth.initialize('CZqVop1givjJzfVWLm4K3YCalTg');
        OAuth.popup('github').then(github => {
            githubToken = github;
            githubToken.me()
                .then((user) => {
                    githubUser = user;
                    //change this to State stuff
                    sessionStorage.setItem('ttfmgithubID', githubUser.id);
                    sessionStorage.setItem('ttfmgithubName', githubUser.name);
                    sessionStorage.setItem('ttfmgithubAlias', githubUser.alias);
                    sessionStorage.setItem('ttfmavatarUrl', githubUser.avatar);

                    githubUser.name,
                        githubUser.alias,
                        githubUser.avatar
                    console.log(githubUser);
                  
                    fetch('/users/github', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            githubID: githubUser.id,
                            githubName: githubUser.name,
                            githubAlias: githubUser.alias,
                            avatarUrl: githubUser.avatar
                        }),
                        // mode: 'cors',
                        // cache: 'default'
                    })
                        .then((response) => {
                            //maybe save token here
                            console.log(response);
                            // redirectUri = response.url;
                            // return response.json();
                            // window.location.href = redirectUri;
                        })
                        .then((json) => {
                            console.log(json);
                        });
                });
            console.log(githubToken);

        });

    }

    render() {
        return (
            <div>
            <div className="container app-wrapper">
                <div className="row">
                    <div className="card col s5 m4">
                        <div className="card-content">
                            <p>New to TestThisFor.Me? Sign up! It takes only a few seconds to change your coding life!</p>
                        </div>
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width">
                                <li className="tab">
                                    <a href="#test5">Sign In</a>
                                </li>
                                <li className="tab">
                                    <a href="#test4">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                            <div id="test4">
                                <div className="row">
                                    <div className="card col s12 m12">
                                        <div className="row">
                                            <form className="col s12">
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                        <input id="su_user_name" type="text" className="validate" />
                                                        <label for="su_user_name">
                                                            User Name
                                                </label>
                                                    </div>
                                                    <div className="input-field col s12">
                                                        <input id="su_email" type="email" className="validate" />
                                                        <label for="su_email">Email</label>
                                                    </div>
                                                    <div className="input-field col s12">
                                                        <input id="su_password" type="password" className="validate" />
                                                        <label for="su_password">Password</label>
                                                    </div>

                                                </div>
                                                <button id="su_submit" className="btn waves-effect waves-light btn-small" type="submit" name="action">
                                                    Submit
                                        </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="test5">
                                <div className="row">
                                    <div className="card col s12 m12">
                                        <div className="row">
                                            <h3>Sign in with either your GitHub account or username!</h3>
                                        </div>
                                        <div className="row">
                                            <a href="" className="center-align" onClick={this.githubClickHandler}>
                                                <img id="gitLogo" src="./img/if_mark-github_298822.png" />
                                                <div className="black-text">Sign In</div>
                                            </a>
                                            <br />
                                            <div className="center-align">
                                                -or-
                                    </div>
                                        </div>
                                        <div className="row">
                                            <form className="col s12">
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                        <input id="li_user_name" type="text" className="validate" />
                                                        <label for="user_name">Email</label>
                                                    </div>
                                                    <div className="input-field col s12">
                                                        <input id="li_password" type="password" className="validate" />
                                                        <label for="password">
                                                            Password
                                                </label>
                                                    </div>
                                                </div>
                                                <button id="li_submit" className="btn waves-effect waves-light btn-small" type="submit" name="action">
                                                    Submit
                                        </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col s6 m7 offset-m1 offset-s1" id="content">
                        <div className="row">
                            <img id="instructions" src="./img/LandingPg-Animated.gif" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col s12 m6 offset-m1 offset-s0" id="content">
                <div className="row">
                    <img id="instructions" src="./img/carbon.png"/>
                </div>
            </div>
        </div>
        );
    }
    }