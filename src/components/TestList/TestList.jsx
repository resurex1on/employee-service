import React, { useState } from 'react';
import './TestList.css';
import { getTests } from '../../helpers/back.helper';

const TestList =  ({authorId}) => {

    const [tests, setTests] = useState(() => {
        return [{
            title: 'Example test',
            description: 'This is example description of example test',
            duration: 75,
            author: 'Liza Drozd'
        },
        {
            title: 'Example test',
            description: 'This is example description of example test',
            duration: 75,
            author: 'Liza Drozd'
        }
    ]
    });

    return(
        <div className='testList'>
            {tests.length ? tests.map((test) => {
                return <div className="testList-item"> 
                    <div className="testList-item-block">
                        <p className='testList-item-title'>{test.title}</p>
                        <p className='testList-item-duration'>Duration: {convertMinToHours(test.duration)}</p>
                    </div>

                    <div className="testList-item-block"> 
                    <div className="testList-item-block-column">
                    <p className='testList-item-description'>{test.description}</p>
                        <p className='testList-item-author'>{test.author}</p>
                    </div>

                    <a className='testList-item-open'>Open</a>
                    </div>

                    
                </div>
            }) : <>There is not single test</>
        }
        </div>
    )
}

const convertMinToHours = (minutes) => {
    if( minutes > 59) {
        return (minutes / 60).toString().split('.')[0]+ ' hours ' + (minutes % 60) + ' minutes'
    } else {
        return minutes + ' mimutes'
    }
    
};

export default TestList;