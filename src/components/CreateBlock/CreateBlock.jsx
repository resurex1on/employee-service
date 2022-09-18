import React, { useState, createContext, useContext } from 'react';
import SingleSelect from '../SingleSelect/SingleSelect';
import MultiSelect from '../MultiSelect/MultiSelect';
import { TestContext } from '../CreateTest/CreateTest';
import './CreateBlock.css';

const options = [
    { value: 'singleSelect', label: 'Single-select' },
    { value: 'multiSelect', label: 'Multiple-select' },
    { value: 'userAnswer', label: "User's answer" }
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
                            updatedQuestions[index].type = event.target.value

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
