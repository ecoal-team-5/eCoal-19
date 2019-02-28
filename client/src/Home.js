import React, {Component} from 'react';
//import axios from 'axios';

// import {quizzes, users} from './examples';
import TimelineItem from './TimelineItem';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            periods: []
        }
    }

    /*async componentDidMount(){
        const quizzes = (await axios.get('http://localhost:8081/quizzes')).data;
        console.log("quizzes",this.state.quizzes);
        this.setState({
        });

    }*/



    render(){

        let firstPeriod = {date : "1452 - 1472",
        img : "/firstPeriod.jpg",
        link : "/firstperiod",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel massa ac est aliquet imperdiet. Aenean tellus neque, euismod ut est at, consequat eleifend ex. In eu semper magna. Fusce egestas convallis odio non cursus. Etiam fringilla feugiat augue, quis faucibus sapien eleifend sed. Donec et neque consectetur odio ornare feugiat."};

        let secondPeriod = {date : "1472 - 1492",
        img : "secondPeriod.jpg",
        link : "/secondperiod",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel massa ac est aliquet imperdiet. Aenean tellus neque, euismod ut est at, consequat eleifend ex. In eu semper magna. Fusce egestas convallis odio non cursus. Etiam fringilla feugiat augue, quis faucibus sapien eleifend sed. Donec et neque consectetur odio ornare feugiat."};

        let thirdPeriod = {date : "1492 - 1519",
        img : "thirdPeriod.jpg",
        link : "/thirdperiod",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel massa ac est aliquet imperdiet. Aenean tellus neque, euismod ut est at, consequat eleifend ex. In eu semper magna. Fusce egestas convallis odio non cursus. Etiam fringilla feugiat augue, quis faucibus sapien eleifend sed. Donec et neque consectetur odio ornare feugiat."};

        let periods = [firstPeriod, secondPeriod, thirdPeriod];

        return(
            <div>
                {periods.map (q => <TimelineItem periods={q} />)}
            </div>
        )
    }
}

export default Home;