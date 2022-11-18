import { TextField } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { TestContext } from '../CreateTest/CreateTest';
import './SingleSelect.css';

const SingleSelect = ({ index }) => {
    const [testObj, setTestObj] = useContext(TestContext);

    return (
        <div className='singleSelect'>
            <div className='singleSelect-question'>
                <TextField id="outlined-basic" label="Question" variant="standard" className='createBlock-info-input' name='question' type="text" onChange={(event) => {
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

            <p className='singleSelect-title'>Answers:</p>

            <div className='singleSelect-answers'>
                {testObj.questions[index].answers.map((answer, indexAnswer) => {
                    return <div className='singleSelect-answers-item'>
                        <TextField id="outlined-basic" label={"Answer " + (indexAnswer + 1)} variant="standard" name='answer-text' className='singleSelect-answers-item-input createBlock-info-input' type='text' onChange={(event) => {
                            setTestObj((currentTestObj) => {
                                const newQuestions = JSON.parse(JSON.stringify(currentTestObj.questions));

                                newQuestions[index].answers[indexAnswer] = {
                                    ...newQuestions[index].answers[indexAnswer],
                                    text: event.target.value
                                };

                                return { ...currentTestObj, questions: newQuestions }
                            });
                        }} />

                        {/* <label htmlFor='answer-isCorrect'>Is Correct</label>
                        <input name='answer-isCorrect' type='radio' onChange={(event => {
                            setTestObj((currentTestObj) => {
                                const newQuestions = JSON.parse(JSON.stringify(currentTestObj.questions));

                                newQuestions[index].answers[indexAnswer] = {
                                    ...newQuestions[index].answers[indexAnswer],
                                    isCorrect: event.target.checked
                                };

                                return { ...currentTestObj, questions: newQuestions }
                            });
                        })} /> */}
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
                    });

                    return { ...currentTestObj, questions: newQuestions }
                });
            }}>Add new answer</a>
        </div>
    );
}

export default SingleSelect;
