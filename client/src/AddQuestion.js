import React, {Component} from 'react';

class AddQuestion extends Component {
    constructor(props){
        super(props);
        this.state=({
            answerType : "txt",
            nbrQ : 2
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

    render(){
        let Questions = [];
        if(this.state.answerType === "txt"){
            for(let i= 0 ;i<this.state.nbrQ ;i++){
                Questions.push("<input type='text' placeholder='Your question'/><input type='checkbox'/><br/>");
            }
        }
        
        if(this.state.answerType === "img"){
            for(let i= 0 ;i<this.state.nbrQ ;i++){
                Questions.push("<input type='file'/><input type='checkbox'/><br/>");
            }
        }
        console.log(this.state.answerType);

        return(

            <form>
                Your question is about the : 
                <select>
                    <option value="firstPeriod">First Period</option>
                    <option value="secondPeriod">Second Period</option>
                    <option value="thirdPeriod">Third Period</option>
                </select><br/>

                What's your question ? <input type="text" placeholder="Your question"/><br/>

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