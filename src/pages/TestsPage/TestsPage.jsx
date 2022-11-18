import React, { useState } from 'react';
import CreateTest from '../../components/CreateTest/CreateTest';
import TestList from '../../components/TestList/TestList';
import UsersList from '../../components/UsersList/UsersList';
import CreateTask from '../../components/CreateTask/CreateTask';
import './TestsPage.css';
import { Typography } from '@mui/material';

const testMock = {
    title: 'example',
    description: 'example description',
    content: {

    },
    duration: 10,
    deadline: new Date(2022, 27, 9)
};

const TestsPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const getContent = () => {
        switch (activeTab) {
            case 0:
                return <div className='testsPage-create'>
                    <CreateTest />
                </div>
            case 1:
                return <div className='testsPage-list'>
                    <div className='testsPage-list-item'>
                        <TestList />
                    </div>

                    <div className='testsPage-list-item'>
                        <TestList shouldShowsUserList={true} />
                    </div>
                </div>
            case 2:
                return <div className='testsPage-users'>
                    <UsersList />
                </div>
            case 3:
                return <div className='testsPage-calendar'>
                    <CreateTask />
                </div>
        }
    };

    return (
        <div className='testsPage-container'>
            <ul className="testsPage-navbar">
                <li className={activeTab === 0 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(0)}>
                    <Typography variant="h6" gutterBottom>Tests </Typography>
                </li>
                <li className={activeTab === 3 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(3)}>
                    <Typography variant="h6" gutterBottom>Tasks </Typography>
                </li>
            </ul>

            {getContent()}
        </div>
    );
}

export default TestsPage;
