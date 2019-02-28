import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";

import logo from "./imgs/logo.png";
import toggleMenuOpen from "./imgs/hamburger-menu.svg";
import toggleMenuClose from "./imgs/close-menu.svg"

class NavBar extends Component {
	openMenu() {
		document.getElementById('menu').style.transform = "translate3d(0vw, 0,0)";
	}
	closeMenu() {
		document.getElementById('menu').style.transform = "translate3d(200vw, 0, 0)";
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
						<a href="#"><img className="toggle-menu-icon img-fluid" src={toggleMenuOpen} alt ="click to open menu"></img></a>
						</div>
						
					</div>

			</nav>
			<nav id='menu' className="menu-primary">
					<div className="toggle__wrapper toggle__wrapper__close" onClick={e => this.closeMenu()}>
					<img className="toggle-menu-icon img-fluid" src={toggleMenuClose} alt ="click to close menu"></img>
					</div>
				<ul className="menu__list">
					<Link to={'/'}><li className="menu__list__item">Home</li></Link>
					<a href="#"><li className="menu__list__item">Login</li></a>
					<a href="#"><li className="menu__list__item">Sign up</li></a>
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
