import React, { useState, useContext, useEffect, useRef } from 'react';
import { HandySvg } from 'handy-svg';
import { TestContext } from '../CreateTest/CreateTest';
import './Rate.css';
import starSvg from '../../assets/images/star.svg'
import { Box, Rating, TextField } from '@mui/material';

const Rate = ({ index }) => {
    const [testObj, setTestObj] = useContext(TestContext);
    const answersRef = useRef();

    const activateElements = (eventItemId) => {
        setTestObj(() => {
            const newAnswers = testObj.questions[index].answers.map((currentAnswer, answerIndex) => {
                return { ...currentAnswer, isActive: (eventItemId >= answerIndex) }
            });
            const newQuestion = { ...testObj.questions[index], answers: newAnswers };
            const newQuestions = JSON.parse(JSON.stringify(testObj.questions));
            newQuestions[index] = newQuestion;

            return { ...testObj, questions: newQuestions }
        })
    };

    return (
        <div className='multiSelect'>
            <div className='multiSelect-question'>
                <TextField id="outlined-basic" label="Question" variant="standard" className='createBlock-info-input multiSelect-info-input' name='question' type="text" onChange={(event) => {
                    setTestObj((currentTestObj) => {
                        const newQuestions = JSON.parse(JSON.stringify(currentTestObj.questions));

                        newQuestions[index] = {
                            ...newQuestions[index],
                            title: event.target.value
                        }

                        return { ...currentTestObj, questions: newQuestions }
                    });
                }} />
            </div>

            <div className='rate-answers'>
                <Rating name="size-large" defaultValue={2} size="large" />
            </div>
        </div>
    );
}

export default Rate;
