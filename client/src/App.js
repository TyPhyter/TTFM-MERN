import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import All from "./pages/All";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import Review from "./pages/Review";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import AppContext from "./AppContext";

class App extends Component {

    state = {
        user: {},
        token: '',
        loggedIn: false,
        showModal: false,
        currentProject: {},
        logIn: () => {
            this.setState({ loggedIn: true });
        },
        logOut: () => {
            this.setState({ loggedIn: false });
        },
        updateUser: (user) => {
            this.setState({ user });
        },
        toggleModal: () => {
            this.setState({ showModal: true });
        },
        setCurrentProject: (currentProject) => {
            this.setState({ currentProject });
        }
    }

    render() {
        return (
            <AppContext.Provider value={ this.state } >
                <Router basename={process.env.PUBLIC_URL}>
                    <div>
                        <Navbar />
                        <Switch>
                            {
                                this.state.loggedIn ?
                                    <Route exact path="/" component={Dashboard} /> : <Route exact path="/" component={Home} />
                            }
                            <Route exact path={`/`} component={Home} />
                            <Route exact path={`/all`} component={All} />
                            <Route exact path={`/create`} component={Create} />
                            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                            <Route exact path={`/detail`} component={Detail} />
                            <Route exact path={`/review`} component={Review} />
                        </Switch>
                        <Footer />
                        {
                            // true && expression = expression
                            this.state.showModal &&
                            <Modal />
                        }
                        
                    </div>
                </Router>
            </AppContext.Provider>
        )
    }
}

export default App;