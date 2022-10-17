import React, { useState } from 'react';
import CreateTest from '../../components/CreateTest/CreateTest';
import TestList from '../../components/TestList/TestList';
import UsersList from '../../components/UsersList/UsersList';
import './TestsPage.css';

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
                    <h1>Calendar</h1>
                </div>
        }
    };

    return (
        <div className='testsPage-container'>
            <ul className="testsPage-navbar">
                <li className={activeTab === 0 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(0)}>Create new test</li>
                <li className={activeTab === 1 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(1)}>Tests list</li>
                <li className={activeTab === 2 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(2)}>Users list</li>
                <li className={activeTab === 3 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(3)}>Calendar</li>
            </ul>

            {getContent()}
        </div>
    );
}

export default TestsPage;
