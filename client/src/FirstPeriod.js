import React, {Component} from 'react';
import axios from 'axios';

import {HTTP_SERVER_PORT_PICTURES,HTTP_SERVER_PORT} from './constants.js';

class Question extends Component{

    render(){
        return(
            <div className="form-group form__group">

                <form className="form__questions" onSubmit={(e) => this.props.nextQuestion(e)}>
                    <h2>{this.props.question.question}</h2><br/>
                    {this.props.question.imgAnswers.map(img => <div className="answer"><input type="checkbox" /><img src={HTTP_SERVER_PORT_PICTURES + img} className="imgquizz" alt="/"/></div> )}
                    {this.props.question.txtAnswers.map(txt => <div className="answer"><input type="checkbox" id="checkbox" name='c' />{txt} <label for="checkbox"></label></div>  )}
                    <div className="container__submit">
                        <input type="submit" value="Answer" id="submit" className="submit"/>
                    </div>
                </form>

            </div>

        )
    }
}

class Quizz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions : [],
            current : 0, 
            score : 0,
            maxScore : 0
        };

        this.nextQuestion = this.nextQuestion.bind(this);
    }

    async componentDidMount(){
        this.questions = (await axios.get(HTTP_SERVER_PORT+"firstPeriod")).data;
        console.log("Questions ",this.questions);
        this.randomQuestions();
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

    randomQuestions(){
        let finalQuestions = [];
        let random = [];
        while(random.length < 4){
            do{
                let max = this.questions.length;
                var tmp = Math.floor(Math.random() * (max));
            }while(random.filter(nb => nb === tmp).length !== 0)
            random.push(tmp);
        }

        for(let i = 0; i < random.length; i++){
            finalQuestions.push(this.questions[random[i]]);
        }

        this.setState({questions : finalQuestions})
        console.log("Final",finalQuestions);
        console.log("Random",random)

    }



    nextQuestion(e) {
        console.log(this.state.questions);
        let choices = [];
        for (let i = 0; i < e.target.elements.length; i++){
            if(e.target.elements[i].checked){
                choices.push(i);
            }
        }

        if(this.isEqual(choices,this.state.questions[this.state.current].solutions)){
            this.setState({score : this.state.score + this.state.questions[this.state.current].points});
        }

        e.preventDefault();
        this.setState({current: this.state.current + 1});

        this.setState({maxScore : this.state.maxScore + this.state.questions[this.state.current].points});
    }

    render(){
        if (this.state.questions == null)
           return <p>Loading...</p>;
        if(this.state.current === this.state.questions.length) 
            return (
                <div>
                    You finished the quizz ! {this.state.score} / {this.state.maxScore}<br/>
                    <a href="/">Go back to the main page</a>
                </div>
            ) 

        return(
            <div>
                <Question nextQuestion={this.nextQuestion} question={this.state.questions[this.state.current]} />
            </div>
        )
    }
}
    
export default Quizz;