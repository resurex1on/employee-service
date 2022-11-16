import React from 'react';
import { useState } from 'react';
import './History.css';


const History = () => {
    const [data, setData] = useState({
        tasks: [{
            title: "Examle test",
            date: "11.11.2022",
            reporter: "Alina Drozd",
            assigned: "Vitaly Zhuk"
        }],
        listOfFeedback: [{

        }]
    })
    return (
        <section className='history'>
            <div className="history-tasks">
                <p>Recently passed tests</p>

                <div className="history-tasks-list">
                    {
                        data.tasks.map(item => {
                            return <div className="history-tasks-list-item">
                                
                            </div>
                        })
                    }
                </div>

            </div>

            <div className="history-feedback">
                <p>Recently recieved high fives</p>
            </div>
        </section>
    );
}

export default History;
