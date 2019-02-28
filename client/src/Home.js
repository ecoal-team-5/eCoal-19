import React, {Component} from 'react';
import TimelineItem from './TimelineItem';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            periods: []
        }
    }

    render() {

        let firstPeriod = {date : "1452 - 1472",
        img : "firstPeriod.jpg",
        link : "firstperiod/"};

        let secondPeriod = {date : "1472 - 1492",
        img : "secondPeriod.jpg",
        link : "secondperiod/"};

        let thirdPeriod = {date : "1492 - 1519",
        img : "thirdPeriod.jpg",
        link : "thirdperiod/"};

        let periods = [firstPeriod, secondPeriod, thirdPeriod];

        return(
            <div>
                {periods.map (q => <TimelineItem periods={q} />)}
            </div>
        )
    }
}

export default Home;