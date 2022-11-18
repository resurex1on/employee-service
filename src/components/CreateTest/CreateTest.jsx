import { TextField, TextareaAutosize } from '@mui/material';
import React, { createContext, useState, useEffect } from 'react';
import { createTest } from '../../helpers/back.helper';
import CreateBlock from '../CreateBlock/CreateBlock';
import TestDisplay from '../TestDisplay/TestDisplay';
import './CreateTest.css';

export const TestContext = createContext();

const testMock = {
    title: '',
    description: '',
    duration: 15,
    questions: [
        {
            title: '',
            type: 'singleSelect',
            answers: [{
                id: 0,
                text: '',
                isCorrect: false
            }]
        }
    ]
};

const CreateTest = () => {
    const [testObj, setTestObj] = useState(testMock);

    useEffect(() => {
        console.log(testObj);
    }, [testObj]);

    return (
        <TestContext.Provider value={[testObj, setTestObj]}>
            <div className='createTest-container'>
                <div className="createTest-creating">
                    <h1 className='createTest-title'>Creating</h1>
                    <div className="createTest-creating-content">
                        <div className='createBlock-info'>
                            <div className="createBlock-info-title">
                                <TextField id="standard-basic" label="Title" variant="standard" name='title' className='createBlock-info-input' type="text" onChange={(event) => setTestObj((currentValue) => {
                                    return {
                                        ...currentValue,
                                        title: event.target.value
                                    }
                                })} />
                            </div>

                            <div className="createBlock-info-description">
                                <TextField id="outlined-multiline-flexible"
                                    rows={5}
                                    label="Description"
                                    multiline name='description' className='createBlock-info-textarea' type="text" onChange={(event) => setTestObj((currentValue) => {
                                        return {
                                            ...currentValue,
                                            description: event.target.value
                                        }
                                    })} />
                            </div>
                        </div>

                        <CreateBlock />

                        <a className="createTest-newQuestion" onClick={() => {
                            setTestObj((currentTestObj) => {
                                return {
                                    ...currentTestObj, questions: [...currentTestObj.questions, {
                                        title: '',
                                        type: 'singleSelect',
                                        answers: [{
                                            id: 0,
                                            text: '',
                                            isCorrect: false
                                        }]
                                    }]
                                }
                            });
                        }}>New question +</a>
                    </div>
                    <div className='createTest-submit' onClick={async () => {
                        console.log(await createTest(testObj));
                    }}>Submit</div>
                </div>

                <div className="createTest-displaying">
                    <h1 className='createTest-title'>Displaying</h1>

                    <TestDisplay />

                </div>
            </div>
        </TestContext.Provider>


    );
}

export default CreateTest;
