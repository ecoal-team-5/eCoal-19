import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HTTP_SERVER_PORT_PICTURES } from './constants.js';

class TimelineItem extends Component {
    render() {
		return (
            <div>
                <h1 class="d-flex justify-content-center">{this.props.periods.date}</h1>
                <div class="row">
                    <div class="col-md-5 d-flex justify-content-center">
                        <img className="imgPeriod" src={HTTP_SERVER_PORT_PICTURES + this.props.periods.icon} alt="/"/>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5 d-flex justify-content-center">
                        Lorem ipsum
                        <Link to={'/quizz/' + this.props.periods.link}>
                            <button type="button" class="btn btn-outline-default waves-effect">
                                Discover more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
		);
    }
}

export default TimelineItem;