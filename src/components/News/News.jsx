import React from 'react';
import './News.css';
import authorImg from '../../assets/images/user.jpg';
import userImg from '../../assets/images/user2.jpg';

const newsMock = [
    {
        type: 'test',
        taskId: 12345,
        author: 'Vitaly Zhuk',
        authorPosition: 'System administrator',
        reporter: 'Alina Drozd',
        feedback: 'Everything is fine, Im glad to work in the company',
        testName: 'How do you feel in the company',
        feelingRate: 5,
        date: '08.08.2022 12:00'
    },
    {
        type: 'action',
        taskId: 12345,
        author: 'Vladislav',
        authorPosition: 'Front-end Developer',
        testName: 'How do you feel in the company',
        subject: 'Vitaly',
        rate: 4,
        feedback: 'Vitaly Zhuk is very confident person. He always works like an excellent specialist',
        date: '08.08.2022 12:40'
    },
    {
        type: 'test',
        taskId: 12345,
        author: 'Vitaly Zhuk',
        authorPosition: 'System administrator',
        reporter: 'Alina Drozd',
        feedback: 'Everything is fine, Im glad to work in the company',
        testName: 'How do you feel in the company',
        feelingRate: 5,
        date: '08.08.2022 12:00'
    },
    {
        type: 'action',
        taskId: 12345,
        author: 'Vladislav',
        authorPosition: 'Front-end Developer',
        testName: 'How do you feel in the company',
        subject: 'Vitaly',
        rate: 4,
        feedback: 'Vitaly Zhuk is very confident person. He always works like an excellent specialist',
        date: '08.08.2022 12:40'
    },
    {
        type: 'test',
        taskId: 12345,
        author: 'Vitaly Zhuk',
        authorPosition: 'System administrator',
        reporter: 'Alina Drozd',
        feedback: 'Everything is fine, Im glad to work in the company',
        testName: 'How do you feel in the company',
        feelingRate: 5,
        date: '08.08.2022 12:00'
    },
    {
        type: 'action',
        taskId: 12345,
        author: 'Vladislav',
        authorPosition: 'Front-end Developer',
        testName: 'How do you feel in the company',
        subject: 'Vitaly',
        rate: 4,
        feedback: 'Vitaly Zhuk is very confident person. He always works like an excellent specialist',
        date: '08.08.2022 12:40'
    },
    {
        type: 'test',
        taskId: 12345,
        author: 'Vitaly Zhuk',
        authorPosition: 'System administrator',
        reporter: 'Alina Drozd',
        feedback: 'Everything is fine, Im glad to work in the company',
        testName: 'How do you feel in the company',
        feelingRate: 5,
        date: '08.08.2022 12:00'
    },
    {
        type: 'action',
        taskId: 12345,
        author: 'Vladislav',
        authorPosition: 'Front-end Developer',
        testName: 'How do you feel in the company',
        subject: 'Vitaly',
        rate: 4,
        feedback: 'Vitaly Zhuk is very confident person. He always works like an excellent specialist',
        date: '08.08.2022 12:40'
    },
    {
        type: 'test',
        taskId: 12345,
        author: 'Vitaly Zhuk',
        authorPosition: 'System administrator',
        reporter: 'Alina Drozd',
        feedback: 'Everything is fine, Im glad to work in the company',
        testName: 'How do you feel in the company',
        feelingRate: 5,
        date: '08.08.2022 12:00'
    },
    {
        type: 'action',
        taskId: 12345,
        author: 'Vladislav',
        authorPosition: 'Front-end Developer',
        testName: 'How do you feel in the company',
        subject: 'Vitaly',
        rate: 4,
        feedback: 'Vitaly Zhuk is very confident person. He always works like an excellent specialist',
        date: '08.08.2022 12:40'
    }

];

const News = () => {
    return (
        <section className='news'>
            <div className='news-container'>
                {newsMock.map((item) => {
                    switch (item.type) {
                        case 'test':
                            return <div className='news-test'>
                                <div className="news-test-author">
                                    <img className="news-test-author-image" src={authorImg} alt="" />
                                    <div className="news-test-author-info">
                                        <p className='news-test-author-info-name'>{item.author}</p>
                                        <p className='news-test-author-info-position'>{item.authorPosition}</p>
                                    </div>
                                </div>
                                <div className="news-test-info">
                                    <p className='news-test-info-name'>Has passed the test:</p>
                                    <p className='news-test-info-name-content'>{item.testName}</p>
                                </div>

                                <div className='news-test-button'>
                                    <a className='news-test-button-link' href="#">Open</a>
                                </div>

                                {/* <div className="news-test-reporter">
                                    <p className='news-test-reporter-name'>Reporter: <span className='news-test-reporter-name-content'>{item.reporter}</span></p>
                                    <p className='news-test-reporter-time'>Date: {item.date}</p>
                                </div> */}
                            </div>

                        case 'action':
                            return <div className='news-feedback news-test'>
                                <div className='news-feedback-author news-test-author'>
                                    <img className='news-feedback-author-image news-test-author-image' src={userImg} alt="" />
                                    <div className="news-feedback-author-info news-test-author-info">
                                        <p className='news-feedback-author-name news-test-author-info-name'>{item.author}</p>
                                        <p className='news-feedback-author-info-position news-test-author-info-position'>{item.authorPosition}</p>
                                    </div>
                                </div>
                                <div className="news-feedback-info">
                                    <p className='news-feedback-info-name news-test-info-name'>Gave feedback about you:</p>
                                    <p className='news-feedback-info-content news-test-info-name-content'>{item.feedback}</p>
                                </div>

                                <div className='news-feedback-button'>
                                    <a className='news-feedback-button-link' href="#">Open</a>
                                </div>

                                {/* <div className="news-feedback-time">
                                    <p className='news-feedback-reporter-time'>Date: {item.date}</p>
                                </div> */}
                            </div>
                        default:
                            return undefined
                    }

                })}
            </div>
        </section>
    );
}

export default News;
