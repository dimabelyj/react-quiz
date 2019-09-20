import React from 'react';
import classes from './AnswerItem.scss';

const AnswerItem = props => {
    console.log(props);
    return (
        <li className ='AnswerItem'
            onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem