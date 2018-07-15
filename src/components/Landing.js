import React, {Component} from "react";
// import OAuth


let githubToken;
let OAuth;
let githubUser;
let redirectUri;

export default class Landing extends Component {
    // state
    state = {
        email: "",
        password: "",
        userName: ""

    };

    // method

    handleImputChange = event => {
      let value = event.target.value;
      const name = event.target.name;

        // input state
        this.setState({
            [name]: value
        });
    }
    



  signUpSubmit = event => {
    event.preventDefault();
    let redirectUri;
    let localUri = 'http://localhost:8080/users/';
    let productionUri = 'http://www.testthisfor.me/users/';
    let su_email = document.querySelector('#su_email').value.trim();
    let su_password = document.querySelector('#su_password').value.trim();
    let displayName = document.querySelector('#su_user_name').value.trim();
    fetch(productionUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: su_email,
            pass: su_password,
            displayName: displayName
        })
    })
    .then((response) => {
        // maybe save token here
        console.log(response);
        redirectUri = response.url;
        // return response.json();
        window.location.href = redirectUri;
    })
    .then((json) => {
        console.log(json);
    });
};

  signInSubmit = event => {
      event.preventDefault();
      let redirectUri;
      let localUri = 'http://localhost:8080/users/login';
      let productionUri = 'http://www.testthisfor.me/users/login';
      let li_email = document.querySelector('#li_user_name').value.trim();
      let li_password = document.querySelector('#li_password').value.trim();
        fetch(productionUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: li_email,
            pass: li_password
        }),
        // redirect: 'follow'
    })
        .then((response) => {
        //maybe save token here
        console.log(response);
        redirectUri = response.url;
        // return response.json();
        window.location.href = redirectUri;
    })
        .then((json) => {
        console.log(json);
    });
    };

    // Github
    signInGit = event => {
        event.preventDefault();
        OAuth.initialize('CZqVop1givjJzfVWLm4K3YCalTg');
    OAuth.popup('github').then(github => {
        githubToken = github;
        githubToken.me()
            .then((user) => {
                githubUser = user;
                console.log(githubUser);
                fetch('http://www.testthisfor.me/users/github', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        githubID: githubUser.id
                    }),
                    // mode: 'cors',
                    // cache: 'default'
                })
                .then((response) => {
                    //maybe save token here
                    console.log(response);
                    redirectUri = response.url;
                    // return response.json();
                    window.location.href = redirectUri;
                })
                .then((json) => {
                    console.log(json);
                });
            });
        console.log(githubToken);

    });
    };

    


    render() {
        return (
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
                                                <input 
                                                    value= {this.state.userName}
                                                    name="su_UserName"
                                                    onChange={this.handleInputChange}
                                                    type="text"
                                                />
                                                <label for="su_user_name">
                                                    User Name
                                                </label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input 
                                                    value={this.state.email} 
                                                    name="su_email" 
                                                    type="email" 
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="su_email">Email</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input 
                                                    value={this.state.password} 
                                                    name="su_password" 
                                                    type="text"
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="su_password">Password</label>
                                            </div>
                                            
                                        </div>
                                        <button id="su_submit" className="btn waves-effect waves-light btn-small" type="submit" name="action" onClick={this.signUpSubmit}>
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
                                    <a href="" className="center-align">
                                        <img id="gitLogo" src="./img/if_mark-github_298822.png" onClick={this.signInGit}/>
                                        <div className="black-text">Sign In</div>
                                    </a>
                                    <br/>
                                    <div className="center-align">
                                        -or-
                                    </div>
                                </div>
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input 
                                                    value={this.state.email} 
                                                    name="li_email" 
                                                    type="email" 
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="user_name">Email</label>
                                            </div>
                                            <div className="input-field col s12">
                                                <input 
                                                    value={this.state.password} 
                                                    name="li_password" 
                                                    type="text" 
                                                    onChange={this.handleInputChange}
                                                />
                                                <label for="password">
                                                    Password
                                                </label>
                                            </div>
                                        </div>
                                        <button id="li_submit" className="btn waves-effect waves-light btn-small" type="submit" name="action" onClick={this.signInSubmit}>
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
                    <img id="instructions" src="./img/LandingPg-Animated.gif"/>
                </div>
            </div>
        </div>
        </div>
        );
    }
}