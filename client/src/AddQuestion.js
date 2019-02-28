import React, {Component} from 'react';
import axios from 'axios';

import {HTTP_SERVER_PORT_PICTURES,HTTP_SERVER_PORT} from './constants.js';

class AddQuestion extends Component {
    constructor(props){
        super(props);
        this.state=({
            answerType : "txt",
            nbrQ : 2,
            database: 'firstPeriod',
            qName : '',
            qTxtAnswers: [],
            qImgAnswers: [],
            qSolutions: [],
            qPoints: 0 
        })
    }

    setquestion(e){
        let newNbr = e.target.value;
        this.setState({
            nbrQ : newNbr,
          });
    }



    settext(e){
        this.setState({answerType : "txt"});
        
    }    
    
    setimage(e){
        this.setState({answerType : "img"});
    }

    handleChangeDB(e){
        this.setState({database : e.target.value})
        console.log(this.state.database)
    }

    handleChangeName(e){
        this.setState({qName: e.target.value})
        console.log(this.state.qName)
    }

    addToDB(e){
        e.preventDefault();

        let sols = [];

        let ch = document.getElementsByClassName('check');
        for(let i = 0; i < ch.length;i++) {
            if(ch[i].checked)
                sols.push(i);
        }        
        
        let txts = [];

        let qTxts = document.getElementsByClassName('text');
        for(let i = 0; i < qTxts.length;i++) {
            if(qTxts[i].checked)
                txts.push(i);
        }

        let imgs = [];

        let question = {
            question : e.target.question.value,
            video : null,
            txtAnswers: txts,
            imgAnswers: imgs,
            solutions: sols,
            points : sols.length
        }

        console.log("Solutions",sols);
        console.log("textes", txts)


        /*axios.post(HTTP_SERVER_PORT + 'addQuestion', {  // The json object to add in the collection
            question: this.state.qName
        }).then(res => {
        if (res.status === 200)
            this.loadData();                     // If everything is ok, reload data in order to upadate the component
        else
            console.log("Failed to add quizz");
        }).catch(err => console.log("Error =>", err));
        console.log("Envoyé");*/
    }

    render(){
        let Questions = [];
        if(this.state.answerType === "txt"){
            for(let i= 0 ;i<this.state.nbrQ ;i++){
                Questions.push("<input type='text' class='text' placeholder='Your question'/><input type='checkbox'/><br/>");
            }
        }
        
        if(this.state.answerType === "img"){
            for(let i= 0 ;i<this.state.nbrQ ;i++){
                Questions.push("<input type='file'/><input class='check' type='checkbox'/><br/>");
            }
        }
        console.log(this.state.answerType);

        return(

            <form onSubmit={(e) =>  this.addToDB(e)}>
                Your question is about the : 
                <select value={this.state.database} onChange={this.handleChangeDB}>
                    <option value="firstPeriod">First Period</option>
                    <option value="secondPeriod">Second Period</option>
                    <option value="thirdPeriod">Third Period</option>
                </select><br/>

                What's your question ? <input type="text" name='question' placeholder="Your question" /><br/>

                <input type="radio" onChange={e => this.settext(e)} name="answer" checked={this.state.answerType === 'txt'}/> Text Answers
                <input type="radio" onChange={e => this.setimage(e)} name="answer" checked={this.state.answerType === 'img'}/> Image Answers<br/>

                Number of possibles answers : <input type='number' min='2' max='4' onChange={e=>this.setquestion(e)} defaultValue="2"/><br/>
                
                Your possible answers (check the right answer(s))
                <div className="content" dangerouslySetInnerHTML={{__html: Questions.join('')}}></div><br/>

                <input type="submit"/>
            </form>
        )
    }
}

export default AddQuestion;