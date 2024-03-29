import React from 'react';
import classes from './Button.scss';

const Button = props => {

    const cls = [
        classes.Button,
        classes[props.type]
    ]

    return (
        <button
          onClick={props.onClick}
          className="Button primary"
          //className={cls.join(' ')}
          disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button