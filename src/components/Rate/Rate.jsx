import React, { useState, useContext, useEffect, useRef } from 'react';
import {HandySvg} from 'handy-svg';
import { TestContext } from '../CreateTest/CreateTest';
import './Rate.css';
import starSvg from '../../assets/images/star.svg'

const Rate = ({ index }) => {
    const [testObj, setTestObj] = useContext(TestContext);
    const answersRef = useRef();

    const activateElements = (eventItemId) => {
        setTestObj(() => {
             const newAnswers = testObj.questions[index].answers.map((currentAnswer, answerIndex) => {
                return {...currentAnswer, isActive : (eventItemId >= answerIndex)}
            });
            const newQuestion = {...testObj.questions[index], answers : newAnswers};
            const newQuestions = JSON.parse(JSON.stringify(testObj.questions));
            newQuestions[index] = newQuestion;

            return {...testObj, questions : newQuestions}
    })
};

    return (
        <div className='multiSelect'>
            <div className='multiSelect-question'>
                <label className='multiSelect-question-label' htmlFor='question'>Question:</label>
                <input className='createBlock-info-input multiSelect-info-input' name='question' type="text" onChange={(event) => {
                     setTestObj((currentTestObj) => {
                        const newQuestions = JSON.parse(JSON.stringify(currentTestObj.questions));

                        newQuestions[index] = {
                            ...newQuestions[index],
                            title: event.target.value
                        }

                        return { ...currentTestObj, questions: newQuestions }
                    });
                }}/>
            </div>

            <div className='rate-answers'>
                <p>Answers:</p>

                <div className='rate-answers-items' ref={answersRef}>
                {(testObj.questions[index]) ? (testObj.questions[index].answers.map((answer, indexAnswer) => {
                    return <HandySvg
                    onMouseOver={(event) => {
                    const eventItemId = indexAnswer;
                        activateElements(eventItemId);
                    }}
                    src={starSvg}
                    className={`icon ${(answer.isActive)? 'icon-active' : ''}`}
                    width="32"
                    height="32"
                />
                })) : <></>}
                    </div>
            </div>
        </div>
    );
}

export default Rate;
