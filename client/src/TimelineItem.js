import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HTTP_SERVER_PORT_PICTURES } from './constants.js';

class TimelineItem extends Component {
    render() {
		return (
            <div>
                <h1 class="d-flex justify-content-center">1452</h1>
                <div class="row">
                    <div class="col-md-5 d-flex justify-content-center">
                        <img src={HTTP_SERVER_PORT_PICTURES + this.props.quiz.icon} alt="/"/>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-5 d-flex justify-content-center">
                        Lorem ipsum
                        <Link to={'/quizz/' + this.props.quiz._id}>
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