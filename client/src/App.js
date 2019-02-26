import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";


class App extends Component {

    render() {
		return (
			<BrowserRouter>
				<div>
					<nav>
						Welcome to Da Vinci Discovery
							<li><Link to={'/'}>Home</Link></li>
							<li><Link to={'/about'}>About</Link></li>
					</nav>
					<Switch>
						<Route exact={true} path="/" component={Home} />
						<Route exact={true} path="/about" component={About} />
						<Route exact={true} path="/quizz/:id" component={Quizz}/>
						<Route path="*" component={() => <p>Page not Found</p>} />
					</Switch>
				</div>
			</BrowserRouter>
		);
    }
}


export default App;
