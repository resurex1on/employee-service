import React, { useState, useContext, useEffect } from 'react';
import { TestContext } from '../CreateTest/CreateTest';
import './MultiSelect.css';

const MultiSelect = ({ index }) => {
    const [testObj, setTestObj] = useContext(TestContext);

    return (
        <div className='multiSelect'>
            <div className='multiSelect-question'>
                <label className='multiSelect-question-label' htmlFor='question'>Question:</label>
                <input className='createBlock-info-input multiSelect-info-input' name='question' type="text" />
            </div>

            <div className='multiSelect-answers'>
                <p>Answers:</p>
                {testObj.questions[index].answers.map((answer, index) => {
                    return <div className='singleSelect-answers-item'>
                        <label htmlFor='answer-text'>Answer {index + 1}</label>
                        <input name='answer-text' className='singleSelect-answers-item-input createBlock-info-input' type='text' />

                        <label htmlFor='answer-isCorrect'>Is Correct</label>
                        <input name='answer-isCorrect' type='checkbox' />
                    </div>
                })}
            </div>

            {/* <a className='singleSelect-newAnswer' onClick={() => {
                console.log('work');
                setTestObj((currentTestObj) => {
                    const newTestObj = currentTestObj;
                    newTestObj.questions[index].answers.push({
                        id: index,
                        text: '',
                        isCorrect: false
                    })
                    return newTestObj
                });
            }}>Add new answer</a> */}

            <a className='singleSelect-newAnswer' onClick={() => {
                setTestObj((currentTestObj) => {
                    const newQuestions = JSON.parse(JSON.stringify(currentTestObj.questions));

                    newQuestions[index].answers.push({
                        isCorrect: false,
                        text: ''
                    })

                    return {...currentTestObj, questions: newQuestions}
                });
            }}>Add new answer</a>
        </div>
    );
}

export default MultiSelect;
