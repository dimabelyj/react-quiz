import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'What color is the sky?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Red', id: 3},
                    {text: 'Green', id: 4}
                ]
            },
            {
                question: 'In what century Warsaw was founded?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: 'XII', id: 1},
                    {text: 'XVII', id: 2},
                    {text: 'XIII', id: 3},
                    {text: 'XV', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer id: ', answerId)

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Please, answer all questions</h1>

                    <ActiveQuiz 
                     answers={this.state.quiz[this.state.activeQuestion].answers}
                     question={this.state.quiz[this.state.activeQuestion].question}
                     onAnswerClick={this.onAnswerClickHandler}
                     quizLength={this.state.quiz.length}
                     answerNumber={this.state.activeQuestion +1}
                    />
                </div>
            </div>

        )
    }
}

export default Quiz