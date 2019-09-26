import React from 'react';
import classes from './FinishedQuiz.scss';

const FinishedQuiz = props => {
    return (
        <div className='FinishedQuiz'>
            <ul>
                <li>
                   <strong>1. </strong> 
                   How are you
                   <i className='fa fa-times error'/>
                </li>
                <li>
                   <strong>2. </strong> 
                   How are you
                   <i className='fa fa-check success' />
                </li>
            </ul>

            <p>Right answers 4 from 12</p>

            <div>
                <button>Again?</button>
            </div>
        </div>
    )
}

export default FinishedQuiz