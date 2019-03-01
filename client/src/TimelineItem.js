import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HTTP_SERVER_PORT_PICTURES } from './constants.js';

class TimelineItem extends Component {
    render() {
		return (

                <section className="timeline">

                <ul className="timeline__list">
                <svg width="100%" height="100%" 
                            viewPort="0 0 100% 100%" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" className="figure__line">
                            <line x1="50%" x2="50%" y1="75px" y2="100%" stroke="#7a0026" stroke-width="1.5px"></line>
                    
                    </svg>
                <div className="wrapper__dates">
                            <h3 class="d-flex justify-content-center">{this.props.periods.date}</h3>
                        </div>
                        <li className="timeline__list__item">
                                <Link to={this.props.periods.link} className="discover__button">


                        

                            <div className="timeline__list__figure">
                                <img className="imgPeriod" src={HTTP_SERVER_PORT_PICTURES + this.props.periods.img} alt="/"/>
                                {/* <svg width="100%" height="100%" 
                                viewPort="0 0 100% 100%" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" className="figure__square">
                                    <rect  x="0" y="0" stroke-width="5px" width="180px" height="180px" stroke="#7a0026" fill="none"></rect>
                                </svg> */}
                            </div>
                            <div className="timeline__list__desc-link">
                                <p>{this.props.periods.desc}</p>
                                </div>

                                </Link>
                                </li>
                                </ul>

                </section>
    		);
    }
}

export default TimelineItem;