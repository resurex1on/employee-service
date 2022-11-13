import React, { useState, useContext } from 'react';
import { TestContext } from '../CreateTest/CreateTest';
import './TestDisplay.css';
import Rate from '../Rate/Rate';

const TestDisplay = () => {
    const [testObj, setTestObj] = useContext(TestContext);

    const getQuestion = (question, index) => {
        switch (question.type) {
            case 'singleSelect':
                return <> {(question.title !== '') ?
                    <div className='testDisplay-question'>
                        <h2 className='testDisplay-question-index'>Question {index + 1}</h2>
                        <p className='testDisplay-question-title'>{question.title}</p>

                        <div className="testDisplay-question-answers">
                            {question.answers.map((answer) => {
                                return <div className='testDisplay-question-answers-item'>
                                    {(answer.text !== '') ? <>
                                        <input className='testDisplay-question-answers-item-radio' type="radio" name="answer" checked={answer.isCorrect} />
                                        <label className='testDisplay-question-answers-item-label' htmlFor="answer">{answer.text}</label>
                                    </> : <></>}
                                </div>
                            })}
                        </div>
                        <div className='testDisplay-question-submit'>Submit</div>
                    </div> : <> </>}
                </>

            case 'multiSelect':
                return <> {(question.title !== '') ?
                    <div className='testDisplay-question'>
                        <h2 className='testDisplay-question-index'>Question {index + 1}</h2>
                        <p className='testDisplay-question-title'>{question.title}</p>

                        <div className="testDisplay-question-answers">
                            {question.answers.map((answer) => {
                                return <div className='testDisplay-question-answers-item'>
                                    {(answer.text !== '') ? <>
                                        <input className='testDisplay-question-answers-item-radio' type="checkbox" name="answer" checked={answer.isCorrect} />
                                        <label className='testDisplay-question-answers-item-label' htmlFor="answer">{answer.text}</label>
                                    </> : <></>}
                                </div>
                            })}
                        </div>
                        <div className='testDisplay-question-submit'>Submit</div>
                    </div> : <> </>}
                </>

            case 'rate':
                return <> {(question.title !== '') ?
                <div className='testDisplay-question'>
                    <h2 className='testDisplay-question-index'>Question {index + 1}</h2>
                    <p className='testDisplay-question-title'>{question.title}</p>

                    <div className="testDisplay-question-answers">
                        {question.answers.length}
                    </div>
                    <div className='testDisplay-question-submit'>Submit</div>
                </div> : <> </>}
            </>

            default:
                return <></>
        }
    };

    return (
        <div className='testDisplay'>
            <div className='testDisplay-info'>
                <h1 className='testDisplay-info-title'>{testObj.title}</h1>
                <p className='testDisplay-info-description'>{testObj.description}</p>
            </div>

            {testObj.questions.map((question, index) => {
                return getQuestion(question, index)
            })}
        </div>
    );
}

export default TestDisplay;
