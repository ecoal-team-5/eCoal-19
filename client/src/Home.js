import React, {Component} from 'react';
import axios from 'axios';

// import {quizzes, users} from './examples';
import TimelineItem from './TimelineItem';

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
                {this.state.quizzes.map (q => <TimelineItem quiz={q} />)}
            </div>
        )
    }
}

export default Home;