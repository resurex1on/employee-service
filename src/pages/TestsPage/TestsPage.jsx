import React, { useState } from 'react';
import CreateTest from '../../components/CreateTest/CreateTest';
import TestList from '../../components/TestList/TestList';
import UsersList from '../../components/UsersList/UsersList';
import CreateTask from '../../components/CreateTask/CreateTask';
import './TestsPage.css';
import { Typography } from '@mui/material';

const TestsPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const getContent = () => {
        switch (activeTab) {
            case 1:
                return <div className='testsPage-create'>
                    <CreateTest />
                </div>
            case 0:
                return <div className='testsPage-list'>
                    <div className='testsPage-list-item'>
                        <TestList />
                    </div>
                </div>
        }
    };

    return (
        <div className='testsPage-container'>
            <ul className="testsPage-navbar">
                <li className={activeTab === 0 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(0)}>
                    <Typography variant="h6" gutterBottom>List </Typography>
                </li>
                <li className={activeTab === 1 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(1)}>
                    <Typography variant="h6" gutterBottom>Create </Typography>
                </li>
            </ul>

            {getContent()}
        </div>
    );
}

export default TestsPage;
