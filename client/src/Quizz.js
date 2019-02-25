import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class Question extends Component{

    render(){
        return(
            <form onSubmit={(e) => this.props.nextQuestion(e)}>
                <h2>{this.props.question.question}</h2><br/>
                {this.props.question.imgAnswers.map(img => <div><input type="checkbox" /><img src={HTTP_SERVER_PORT_PICTURES + img} class="imgquizz"/></div> )}
                {this.props.question.txtAnswers.map(txt => <div><input type="checkbox" name='c' />{txt}</div>  )}
                <input type="submit" />
            </form>
        )
    }
}

class Quizz extends Component {
    constructor(props) {
        super(props);
        this.quizz = quizzes.filter(q => q._uid == this.props.match.params.id)[0];
        console.log(this.quizz);
        this.state = {current : 0};
        this.nextQuestion = this.nextQuestion.bind(this);
    }


    nextQuestion(e) {
        e.preventDefault();
        console.log(e.target.elements);
        this.setState({current: this.state.current + 1});
    }

    render(){
        if(this.state.current== this.quizz.questions.length) 
            return (
                <div>
                    C'est fini
                </div>
            ) 

        return(
            <div>
                <Question nextQuestion={this.nextQuestion} question={this.quizz.questions[this.state.current]} />
            </div>
        )
    }
}
    
export default Quizz;