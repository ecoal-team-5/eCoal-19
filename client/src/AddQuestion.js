import React, {Component} from 'react';
import axios from 'axios';

import {HTTP_SERVER_PORT} from './constants.js';
import { cpus } from 'os';

class AddQuestion extends Component {
    constructor(props){
        super(props);
        this.state=({
            answerType : "txt",
            nbrQ : 2,
            value : "addFirstPeriod"
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

    handleChange(e){
        this.setState({value : e.target.value})
        console.log(this.state.value)
    }

    addToDB(e){
        e.preventDefault();

        let sols = [];

        let ch = document.getElementsByClassName('check');
        console.log("AAA" + ch.length);
        for(let i = 0; i < ch.length;i++) {
            if(ch[i].checked)
                sols.push(i);
        }        
        
        let txts = [];

        let qTxts = document.getElementsByClassName('text');
        for(let i = 0; i < qTxts.length;i++) {
                txts.push(qTxts[i].value);
        }

        let imgs = [];
        
        let qImgs = document.getElementsByClassName('imgs');

        for(let i = 0; i < qImgs.length;i++) {
            const selectedFile = qImgs[i].files[0];
            const data = new FormData();
            data.append('file', selectedFile, selectedFile.name);
            axios.post(HTTP_SERVER_PORT + "upload", data).then(res => console.log("Res", res));
            imgs.push(selectedFile.name);
        }
        
        let question = {
            question : e.target.question.value,
            video : null,
            txtAnswers: txts,
            imgAnswers: imgs,
            solutions: sols,
            points : sols.length
        }

        console.log("db : ", this.state.value)

        axios.post(HTTP_SERVER_PORT + this.state.value,   // The json object to add in the collection
            question
        ).then(res => {
        if (res.status === 200)
            this.loadData();                     // If everything is ok, reload data in order to upadate the component
        else
            console.log("Failed to add quizz");
        }).catch(err => console.log("Error =>", err));
    }

    render(){
        let Questions = [];
        if(this.state.answerType === "txt"){
            for(let i= 0 ;i<this.state.nbrQ ;i++){
                Questions.push("<input type='text' className='text' placeholder='Your question'/><input className='check'  type='checkbox'/><br/>");
            }
        }
        
        if(this.state.answerType === "img"){
            for(let i= 0 ;i<this.state.nbrQ ;i++){
                Questions.push("<input className='imgs' type='file'/><input className='check' type='checkbox'/><br/>");
            }
        }
        console.log(this.state.answerType);

        return(

            <form onSubmit={(e) =>  this.addToDB(e)}>
                Your question is about the : 
                <br /><br /><br /><br /><br /><br /><br /><select className="database" onChange={e => this.handleChange(e)} value={this.state.value}>
                    <option value="addFirstPeriod">First Period</option>
                    <option value="addSecondPeriod">Second Period</option>
                    <option value="addThirdPeriod">Third Period</option>
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