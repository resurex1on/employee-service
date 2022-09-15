import { useState } from 'react';
import { getAllTasks } from '../../helpers/back.helper';
import './Tasks.css';

const tasksMock = [
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    },
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test 2",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    },
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test 3",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    },
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    },
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test 2",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    },
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test 3",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    },
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test 4",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    },
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test 3",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    },
    {
        reporter: 'Alina Drozd',
        deadLine: "15.08.2022",
        name: "Example test 4",
        duration: '15 minutes',
        description: 'It is exaple test, just for show how it works',
        url: 'http://employee-service/test:01'
    }
];
const Tasks = ({ day, month, year }) => {
    const [tasks, setTasks] = useState(newValue => {
        console.log(getAllTasks());
        return getAllTasks();
    });

    return (
        <section className='tasks'>


            <div className='tasks-title'>
                <h1>Tasks</h1>
                <p className='tasks-date'>{day}.{month}.{year}</p>
            </div>

            <div className='tasks-list'>
                {tasksMock.map(task => {
                    return <div className='tasks-list-item'>
                        <div className="tasks-list-item-title">
                            <h4 className="tasks-list-item-title-name normal">{task.name}</h4>
                            <p className="tasks-list-item-title-duration">Duration: {task.duration}</p>
                        </div>

                        <div className="tasks-list-item-info">
                            <p className="tasks-list-item-info-description">{task.description}</p>
                            <div className="tasks-list-item-info-bottom">
                                <p>Deadline: {task.deadLine}</p>
                                <p>Reporter: {task.reporter}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    );
}

export default Tasks;
