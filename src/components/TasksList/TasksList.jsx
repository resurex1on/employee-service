import React, { useState } from 'react';
import './TasksList.css';
import { getTests} from '../../helpers/back.helper';
import { useEffect } from 'react';
import NotFound from '../NotFound/NotFound';

const TasksList = ({ shouldShowsUserList = false }) => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const items = await getNewItems();

            setTests(items)
        }
        fetchData();
    }, []);

    const filterTestsByAuthor = (tests) => {
        return tests.filter(test => {
             return test.authorId === 1
         });
     };
 
     const getNewItems = async () => {
         let newItems = [];
         if(!shouldShowsUserList) {
             newItems = await getTests()
         } else {
             newItems = filterTestsByAuthor(await getTests());
         }
         
         if (newItems)
          return newItems;
     };

    return (
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
            }) : <div className='testList-no-tests'><NotFound content={'No tests have published yet!'}/></div>
            }
        </div>
    )
}

const convertMinToHours = (minutes) => {
    if (minutes > 59) {
        return (minutes / 60).toString().split('.')[0] + ' hours ' + (minutes % 60) + ' minutes'
    } else {
        return minutes + ' mimutes'
    }
};

export default TasksList;