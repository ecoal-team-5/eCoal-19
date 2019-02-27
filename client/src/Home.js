import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES,HTTP_SERVER_PORT} from './constants.js';

class QThumb extends Component {
    
    render(){
        return(
            <div>
                <h4>{this.props.quiz.name}</h4>
                <Link to={'/quizz/' + this.props.quiz._id}><img src={HTTP_SERVER_PORT_PICTURES + this.props.quiz.icon} alt="/"/>Quizz </Link>
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
            </div>
        )
    }
}

export default Home;