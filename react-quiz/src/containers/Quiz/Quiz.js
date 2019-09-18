import React, {Component} from 'react';
import classes from './Quiz.scss';

class Quiz extends Component {

    state = {
        quiz: []
    }
    
    render() {
        return(
            <div className ='Quiz'>
              <h1>Quiz is loaded</h1>
            </div>
        )
    }
}

export default Quiz