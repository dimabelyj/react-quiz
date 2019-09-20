import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        quiz: [
            {
                question: 'What color is the sky',
                rightAnswerId: 2,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Red', id: 3},
                    {text: 'Green', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer id: ', answerId)
    }

    render() {
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Please, answer all questions</h1>

                    <ActiveQuiz 
                     answers={this.state.quiz[0].answers}
                     question={this.state.quiz[0].question}
                     onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>

        )
    }
}

export default Quiz