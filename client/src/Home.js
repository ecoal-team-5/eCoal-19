import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class QThumb extends Component {
    
    render(){
        return(
            <div>
                <h4>{this.props.quiz.name}</h4>
                <Link to={'/quizz/' + this.props.quiz._uid}><img src={HTTP_SERVER_PORT_PICTURES + this.props.quiz.icon} /> </Link>
            </div>
        )
    }
}

class Home extends Component {

    render(){
        return(
            <div>
                {quizzes.map (q => <QThumb quiz={q} />)}
            </div>
        )
    }
}

export default Home;