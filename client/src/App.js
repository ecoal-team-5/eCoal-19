import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";
import FirstPeriod from "./FirstPeriod.js";
import AddQuestion from "./AddQuestion.js";

class NavBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			connected : false
		}
	}

	checkConnexion(connected) {
		if (connected !== this.state.connected) this.setState({connected: connected})
	}

	render(){
		return(
			<nav className="navbar navbar-light amber lighten-4 mb-4">
			
			  <a className="navbar-brand" href="#">Da Vinci's Discovery</a>
			
			  <button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20">
				<div className="animated-icon1"><span></span><span></span><span></span></div>
			  </button>
			
			  <div className="collapse navbar-collapse" id="navbarSupportedContent20">
			
				<ul className="navbar-nav mr-auto">
				  <li className="nav-item active">
					<Link to={'/'} className="nav-link">Home</Link>
				  </li>
				  <li className="nav-item">
					<Link to={'/newquestion'} className="nav-link">Add a Question</Link>
				  </li>
				  <li className="nav-item">
					<Link to={'/about'} className="nav-link">About</Link>
				  </li>
				</ul>
			
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
							<Route exact={true} path="/firstperiod" component={FirstPeriod}/>
							<Route exact={true} path="/newquestion" component={AddQuestion}/>
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
