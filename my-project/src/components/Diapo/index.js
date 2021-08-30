import React from 'react'
import style from './style.css';
import QuestionComponent from '../QuestionComponent';

import data from '../../openquizzdb_175.json'

const questions = data.quizz.en.débutant;

function Diapo() {
    return (
        <div className="reveal">
            <div className="slides">

        {questions.map((question, i) => {
            return <QuestionComponent key={question.id} questionData={question} max={questions.length} />
        })}
            
            </div>
        </div>
    )
}

export default Diapo
