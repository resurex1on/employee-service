import { TextField, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
                    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                        <Typography
                            variant="h3"
                            className='createTest-title'
                            gutterBottom
                        >
                            Creating
                        </Typography>
                    </Box>
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

                        <div className='createTest-submit' onClick={async () => {
                            console.log(await createTest(testObj));
                        }}>Submit</div>
                    </div>
                </div>

                <div className="createTest-displaying">
                    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                        <Typography
                            variant="h3"
                            className='createTest-title'
                            gutterBottom
                        >
                            Displaying
                        </Typography>
                    </Box>

                    <TestDisplay />

                </div>
            </div>
        </TestContext.Provider>


    );
}

export default CreateTest;
