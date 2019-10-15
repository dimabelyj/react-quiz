import React from 'react';
import classes from './FinishedQuiz.scss';

const FinishedQuiz = props => {
    return (
        <div className='FinishedQuiz'>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                      'fa',
                      props.results[quizItem.id] === 'error' ? 'fa-times error' : 'fa-check success',
                      //classes[props.results[quizItem.id]]
                    ]

                    return (
                        <li
                          key={index}
                        >
                          <strong>{index + 1}</strong>.&nbsp;
                          {quizItem.question}
                          <i className={cls.join(' ')}></i>
                        </li>
                    )
                }) }
                {/* <li>
                   <strong>1. </strong> 
                   How are you
                   <i className='fa fa-times error'/>
                </li>
                <li>
                   <strong>2. </strong> 
                   How are you
                   <i className='fa fa-check success' />
                </li> */}
            </ul>

            <p>Right answers 4 from 12</p>

            <div>
                <button>Again?</button>
            </div>
        </div>
    )
}

export default FinishedQuiz