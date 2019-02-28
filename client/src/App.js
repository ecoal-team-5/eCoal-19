import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";
import Login from "./Login";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {connected: false};
	}

	checkConnexion(connected) {
		if (connected !== this.state.connected) this.setState({connected: connected})
	}

	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark primary-color">
				<h4 className="navbar-brand">Da Vinci Discovery</h4>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    				<span className="navbar-toggler-icon"></span>
  				</button>
				
  				<div className="collapse navbar-collapse" id="basicExampleNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={'/'} className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to={'/about'} className="nav-link">About</Link>
						</li>						
						{ Login.getUser() ? <li><Link className="nav-link" to={"/protected"}>Protected </Link></li> : null }
					</ul>
					<Login checkConnexion={(b) => this.checkConnexion(b)}/>
				</div>
			</nav>
		)
	}
}

class Path extends Component {
	render(){
		return(
			<BrowserRouter>
				<div>
					<NavBar />
					<Switch>
						<Route exact={true} path="/" component={Home} />
						<Route exact={true} path="/about" component={About} />
						<Route exact={true} path="/quizz/:id" component={Quizz}/>
						<Route path="*" component={() => <p>Page not Found</p>} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

class App extends Component {

    render() {
		return (
			<div>
				<Path />
			</div>
		);
    }
}

export default App;
