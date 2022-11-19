import React, { useState } from 'react';
import './TestList.css';
import { getTests, getUserTests } from '../../helpers/back.helper';
import { useEffect } from 'react';
import NotFound from '../NotFound/NotFound';
import { Button, Grid } from '@mui/material';

const TestList = ({ shouldShowsUserList = false }) => {
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
        if (!shouldShowsUserList) {
            newItems = await getTests()
        } else {
            newItems = filterTestsByAuthor(await getTests());
        }

        if (newItems)
            return newItems;
    };

    return (
        <div className='testList'>
            <Grid container spacing={2}>
                {tests.length ? tests.map((test) => {
                    return <Grid item xs={6}>
                        <div className="testList-item">
                            <div className="testList-item-block">
                                <p className='testList-item-title'>{test.title}</p>
                                <p className='testList-item-duration'>Duration: {convertMinToHours(test.duration)}</p>
                            </div>

                            <div className="testList-item-block">
                                <div className="testList-item-block-column">
                                    <p className='testList-item-description'>{test.description}</p>
                                    <p className='testList-item-author'>{test.author}</p>
                                </div>

                                    <Button variant="contained">Open</Button>
                            </div>


                        </div>
                    </Grid>
                }) : <div className='testList-no-tests'><NotFound content={'No tests have published yet!'} /></div>
                }
            </Grid>
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

export default TestList;