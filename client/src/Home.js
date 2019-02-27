import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class QThumb extends Component {
    
    render(){
        return(
            <div>
                <h4>{this.props.quiz.name}</h4>
                <Link to={'/quizz/' + this.props.quiz._id}><img src={HTTP_SERVER_PORT_PICTURES + this.props.quiz.icon} alt="/"/> </Link>
            </div>
        )
    }
}

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            quizzes: []
        }
    }

    async componentDidMount(){
        const quizzes = (await axios.get('http://localhost:8081/quizzes')).data;
        console.log("quizzes",this.state.quizzes);
        this.setState({
            quizzes : quizzes
        });
    }

    render(){
        return(
            <div>
                {this.state.quizzes.map (q => <QThumb quiz={q} />)}
                <br/><h4>1420 - 1900</h4><br/>
                <Link to={'/firstperiod'}>
                    <img src={HTTP_SERVER_PORT_PICTURES + "firstPeriod.jpg"} alt="/" className="imgquizz"/>
                </Link>
            </div>
        )
    }
}

export default Home;