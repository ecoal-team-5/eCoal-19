import React, {Component} from 'react';
import {AxiosInstance as axios} from "axios";
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
        this.state = {
            quizz: [],
            current : 0, 
            score : 0,
            maxScore : 0
        };

        this.nextQuestion = this.nextQuestion.bind(this);
    }

    async componentDidMount(){
        const quizzes = (await axios.get('http://localhost;8081/data')).data;
        this.setState({
            quizzes
        });
    }

    isEqual(a, b){
        if (a.length != b.length){
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

        if(this.isEqual(choices,this.quizz.questions[this.state.current].solutions)){
            this.setState({score : this.state.score + this.quizz.questions[this.state.current].points});
        }

        e.preventDefault();
        console.log(e.target.elements);
        this.setState({current: this.state.current + 1});

        this.setState({maxScore : this.state.maxScore + this.quizz.questions[this.state.current].points});
    }

    render(){
        if(this.state.current== this.quizz.questions.length) 
            return (
                <div>
                    You finished the quizz ! {this.state.score} / {this.state.maxScore}
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