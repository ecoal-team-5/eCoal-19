import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";

import Login from "./Login";
import FirstPeriod from "./FirstPeriod.js";
import AddQuestion from "./AddQuestion.js";

import logo from "./imgs/logo.png";
import toggleMenuOpen from "./imgs/hamburger-menu.svg";
import toggleMenuClose from "./imgs/close-menu.svg";

class NavBar extends Component {
	openMenu() {
		document.getElementById('menu').style.transform = "translate3d(0vw, 0,0)";
	}
	closeMenu() {
		document.getElementById('menu').style.transform = "translate3d(200vw, 0, 0)";
	}

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
			<div>
				<nav className="header__nav header__bar">

					<div className="header__wrapper__logo">
						<Link to={'/'}><img className="logo img-fluid" src={logo} alt="logo da vinci discovery"></img></Link>
					</div>

					<div className="header__toggle" >
						<div className="toggle__wrapper" onClick={e => this.openMenu()}>
						<a><img className="toggle-menu-icon img-fluid" src={toggleMenuOpen} alt ="click to open menu"></img></a>
					</div>
						
					</div>
					</nav>

					<nav id='menu' className="menu-primary">
						<div className="toggle__wrapper toggle__wrapper__close" onClick={e => this.closeMenu()}>
							<img className="toggle-menu-icon img-fluid" src={toggleMenuClose} alt ="click to close menu"></img>
						</div>
						<ul className="menu__list">
							<Link to={'/'}><li className="menu__list__item" onClick={e => this.closeMenu()}>Home</li></Link>
							<Link to={'/login'}><li className="menu__list__item" onClick={e => this.closeMenu()}>Login</li></Link>
							<a href="#"><li className="menu__list__item">Sign up</li></a>

							{ Login.getUser() ? <li className="nav-item">
							<Link to={'/newquestion'} className="menu__list__item" onClick={e => this.closeMenu()}>Add a Question</Link>
							</li> : null }
						<li className="nav-item">
						<Link to={'/about'} className="menu__list__item">About</Link>
						</li>
						</ul>
					</nav>
			</div>
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
							<Route exact={true} path="/login" component={Login}/>
							<Route exact={true} path="/signup" component={AddQuestion}/>
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
