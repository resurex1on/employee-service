import React, { useState } from 'react';
import TestList from '../TestList/TestList';
import UsersList from '../UsersList/UsersList';
import './CreateTask.css';
import userImg from '../../assets/images/user.jpg';
import user2Img from '../../assets/images/user2.jpg';
import { useEffect } from 'react';


const testMocks = [
    {
        title: 'example',
        duration: 15,
        description: 'This is an example test',
        author: 'Alina drozd'
    },
    {
        title: 'New example',
        duration: 15,
        description: 'This is an example test',
        author: 'Alina drozd'
    },
    {
        title: 'Old example',
        duration: 15,
        description: 'This is an example test',
        author: 'Alina drozd'
    }
];

const userMocks = [
    {
        name: 'Vitaly Zhuk',
        position: 'System administrator',

    },
    {
        name: 'Vladislav Leonchik',
        position: 'Front-end developer',
    },
    {
        name: 'Vitaly Zhuk',
        position: 'System administrator',

    },
    {
        name: 'Vladislav Leonchik',
        position: 'Front-end developer',
    },
    {
        name: 'Vitaly Zhuk',
        position: 'System administrator',

    },
    {
        name: 'Vladislav Leonchik',
        position: 'Front-end developer',
    },
    {
        name: 'Vitaly Zhuk',
        position: 'System administrator',

    },
    {
        name: 'Vladislav Leonchik',
        position: 'Front-end developer',
    }
]

const CreateTask = () => {
    const [users, setUsers] = useState(userMocks);
    const [task, setTask] = useState({});
    const [tests, setTests] = useState(testMocks);
    const [userSearch, setUserSearch] = useState("");

    useEffect(() => {
        if (userSearch === '') {
            setUsers(userMocks)
        }
        else {
            setUsers(() => {
                return userMocks.filter(user => user.name.includes(userSearch))
            })
        }

    }, [userSearch]);

    return (
        <>
            <div className='createTask'>
                <h1 className='createTask-name'>Create new task</h1>
                <div className='createTask-block-row start'>
                    <label htmlFor='taskTitle'>Title:</label>
                    <input type="text" name='taskTitle' className='createTask-title input' />
                </div>

                <p className='create-task-subtitle'>Interval</p>
                <div className='createTask-block-row start'>
                    <div className='createTask-block-item'>
                        <label htmlFor='taskDateFrom'>From:</label>
                        <input type="date" name='taskDateFrom' className='createTask-input-date' />
                    </div>

                    <div className='createTask-block-item date-to'>
                        <label htmlFor='taskDateFrom'>To:</label>
                        <input type="date" name='taskDateFrom' className='createTask-input-date' />
                    </div>

                    <div className='createTask-block-item start repeat'>
                        <label htmlFor='taskDateFrom'>Should repeat:</label>
                        <input type="checkbox" name='taskDateFrom' className='createTask-input-repeat' />
                    </div>
                </div>

                <div className='createTask-search block'>
                    <label className='createTask-search label' htmlFor='assign'>Assign to:</label>
                    <input type="text" name='search' className='createTask-search input' value={userSearch} onChange={(event) => {
                        setUserSearch(event.target.value)
                    }} />
                </div>

                <div className='createTask-userlist'>
                    {users ? users.map((user) => {
                        return <div className='createTask-usersList-item'>
                            <img className='createTask-usersList-item-image' src={userImg} alt="" />

                            <div className="createTask-usersList-item-info">
                                <p className='createTask-usersList-item-name'>{user.name}</p>
                                <p className='createTask-usersList-item-position'>{user.position}</p>
                            </div>
                        </div>
                    }) : <></>}
                </div>
                <div className='testBlock'>
                    <label className="testLabel" htmlFor="test">Choose test:</label>
                    <select className="selectTest" name="test" placeholder="Choose test">
                        {tests.length ? tests.map((test) => {
                            return <option value=""> {test.title}</option>
                        }) : <>There is not single test</>
                        }
                    </select>
                </div>
                <div className='createTest-submit'>Submit</div>
            </div>


        </>
    );
}

export default CreateTask;
