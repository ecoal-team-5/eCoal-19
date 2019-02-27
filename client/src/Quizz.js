import React, {Component} from 'react';
//import {AxiosInstance as axios} from "axios";
import axios from 'axios';

import {HTTP_SERVER_PORT_PICTURES,HTTP_SERVER_PORT} from './constants.js';

class Question extends Component{

    render(){
        return(
            <form onSubmit={(e) => this.props.nextQuestion(e)}>
                <h2>{this.props.question.question}</h2><br/>
                {this.props.question.imgAnswers.map(img => <div><input type="checkbox" /><img src={HTTP_SERVER_PORT_PICTURES + img} className="imgquizz" alt="/"/></div> )}
                {this.props.question.txtAnswers.map(txt => <div><input type="checkbox" name='c' />{txt}</div>  )}
                <input type="submit" />
            </form>
        )
    }
}

class Quizz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizz : null,
            current : 0, 
            score : 0,
            maxScore : 0
        };

        this.nextQuestion = this.nextQuestion.bind(this);
    }

    async componentDidMount(){
        const quizz = (await axios.get(HTTP_SERVER_PORT+"quizz/"+this.props.match.params.id)).data;
        console.log("quizzaxios",quizz);
        this.setState({
            quizz : quizz
        });
    }

    isEqual(a, b){
        if (a.length !== b.length){
            return false;
        }

        for (var i = 0; i < a.length; i++){
            if (a[i] !== b[i]){
                return false;
            }
        }

        return true;
    }

    nextQuestion(e) {
        let choices = [];
        for (let i = 0; i < e.target.elements.length; i++){
            if(e.target.elements[i].checked){
                choices.push(i);
            }
        }

        if(this.isEqual(choices,this.state.quizz.questions[this.state.current].solutions)){
            this.setState({score : this.state.score + this.state.quizz.questions[this.state.current].points});
        }

        e.preventDefault();
        this.setState({current: this.state.current + 1});

        this.setState({maxScore : this.state.maxScore + this.state.quizz.questions[this.state.current].points});
    }

    render(){
        if (this.state.quizz == null)
           return <p>Loading...</p>;
        console.log("quizz",this.state.quizz);
        if(this.state.current === this.state.quizz.questions.length) 
            return (
                <div>
                    You finished the quizz ! {this.state.score} / {this.state.maxScore}
                </div>
            ) 

        return(
            <div>
                <Question nextQuestion={this.nextQuestion} question={this.state.quizz.questions[this.state.current]} />
            </div>
        )
    }
}
    
export default Quizz;