import React, { useState, createContext, useContext } from 'react';
import SingleSelect from '../SingleSelect/SingleSelect';
import MultiSelect from '../MultiSelect/MultiSelect';
import { TestContext } from '../CreateTest/CreateTest';
import './CreateBlock.css';
import Rate from '../Rate/Rate';

const options = [
    { value: 'singleSelect', label: 'Single-select' },
    { value: 'multiSelect', label: 'Multiple-select' },
    { value: 'userAnswer', label: "User's answer" },
    { value: 'rate', label: "Rate" }
];

const CreateBlock = () => {
    const [questionType, setQuestionType] = useState('singleSelect');
    const [testObj, setTestObj] = useContext(TestContext);

    const getQuestionType = (type, index) => {
        switch (type) {
            case 'singleSelect':
                return <SingleSelect index={index} />
            case 'multiSelect':
                return <MultiSelect index={index} />
            case 'rate':
                return <Rate index={index} />
            case 'userAnswer':
                return <h1>userSelect</h1>
            default:
                return <></>
        }
    }

    return (
        <>
            {testObj.questions.map((question, index) => {
                return <div className='createBlock'>
                    <div className='createBlock-type'>
                        <p>Question type:</p>
                        <select className='createBlock-type-select' name='questionType' value={question.type} onChange={(event) => setTestObj((currentTestObj) => {
                            const updatedQuestions = currentTestObj.questions;
                            const questionType = event.target.value;

                            updatedQuestions[index] = {
                                type: questionType,
                                title: '',
                                answers: [{
                                    id: 0,
                                    text: '',
                                    isCorrect: false
                                }]
                            }

                            if (questionType === 'rate') {
                                updatedQuestions[index] = {
                                    ...updatedQuestions[index],
                                    answers: [{
                                        id: 0,
                                        isActive: 0
                                    },
                                    {
                                        id: 1,
                                        isActive: 0
                                    },
                                    {
                                        id: 2,
                                        isActive: 0
                                    },
                                    {
                                        id: 3,
                                        isActive: 0
                                    },
                                    {
                                        id: 4,
                                        isActive: 0
                                    }]
                                }
                            }

                            return {
                                ...currentTestObj,
                                questions: updatedQuestions
                            }
                        })}>
                            {
                                options.map((option) => {
                                    return <option value={option.value}>{option.label}</option>
                                })
                            }
                        </select>
                    </div>

                    {getQuestionType(question.type, index)}
                </div>
            })}
        </>
    );
}

export default CreateBlock;
