import { Typography } from '@mui/material';
import React, { useState } from 'react'
import CreateTask from '../../components/CreateTask/CreateTask';
import TasksList from '../../components/TasksList/TasksList';
import './TasksPage.css';


const TasksPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const renderPage = () => {
        switch (activeTab) {
            case 1:
                return <CreateTask />
            case 0:
                return <TasksList />
            default:
                return <TasksList />
        }
    };

    return (
        <div className='tasksPage'>
            <ul className="testsPage-navbar">
                <li className={activeTab === 0 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(0)}>
                    <Typography variant="h6" gutterBottom>List</Typography>
                </li>
                <li className={activeTab === 1 ? 'testsPage-navbar-item active' : 'testsPage-navbar-item'} onClick={() => setActiveTab(1)}>
                    <Typography variant="h6" gutterBottom>Create</Typography>
                </li>
            </ul>
            <div className='tasksPage-container'>
                {renderPage()}
            </div>
        </div>
    )
}

export default TasksPage;
