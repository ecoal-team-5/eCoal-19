import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";
import FirstPeriod from "./FirstPeriod.js";
import AddQuestion from "./AddQuestion.js";

class NavBar extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark primary-color">
				<h4 className="navbar-brand">Welcome to Da Vinci Discovery</h4>

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
						<li className="nav-item">
							<Link to={'/newquestion'} className="nav-link">Add your Question</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto nav-flex-icons">
						<li className="nav-item dropdown">
							<button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true"	aria-expanded="false">
								<i className="fas fa-user"></i>
							</button>
							<div className="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
								<button className="dropdown-item" href="#">Action</button>
								<button className="dropdown-item" href="#">Another action</button>
								<button className="dropdown-item" href="#">Something else here</button>
        					</div>
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
