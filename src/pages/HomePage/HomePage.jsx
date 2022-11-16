import React, { useState } from 'react';
import News from '../../components/News/News';
import Schedule from '../../components/Schedule/Schedule';
import './HomePage.css';
import userImg from '../../assets/images/user.jpg';
import user2Img from '../../assets/images/user2.jpg';
import gearIcon from '../../assets/images/gear.png';

const userMock = {
    name: 'Vitaly Zhuk',
    position: 'System administrator',
    manager: {
        name: 'Denis Legostaev',
        image: user2Img,
        position: 'Head of Sestem administrators'
    },
    role: 'user',
    email: 'vitaly-zhuk@mail.com',
    history: [
        {

        }
    ],
    rates: [
        {
            date: '11.2'
        }
    ],
    users: ["Vlad Leonchik", "Vitaliy Zhuk", "ALina Drozd"]
};

const HomePage = () => {
    const [userData, setUserData] = useState(userMock);

    return (
        <div className='home-container'>
            {/* <News />
            <Schedule /> */}
            <div className="profile-banner">
                <div className='profile-banner-image'>
                    <img src={userImg} />
                </div>

                <div className='profile-banner-info'>
                    <div className="profile-banner-info-top">
                        <div className="profile-banner-info-top-left">
                            <p className='profile-banner-info-name'>{userData.name}</p>
                            <p className='profile-banner-info-position'>{userData.position}</p>
                        </div>

                        <div className="profile-banner-info-about-top-right">
                            <img className='profile-banner-info-about-top-right-icon' src={gearIcon} />
                        </div>

                    </div>

                    <div className="profile-banner-info-bottom">
                        <div className='profile-banner-info-bottom-item'>
                            <p className='profile-banner-info-bottom-item-label'>Reports to:</p>
                            <div className='profile-banner-info-bottom-item-manager'>
                                <img className='profile-banner-info-bottom-item-manager-image' src={userData.manager.image} alt="" />

                                <div className="profile-banner-info-bottom-item-manager-info">
                                    <p className='profile-banner-info-bottom-item-manager-name'>{userData.manager.name}</p>
                                </div>
                            </div>
                        </div>

                        <div className='profile-banner-info-about-bottom-item'>
                            <p className='profile-banner-info-bottom-item-label'>Email:</p>
                            <p className='profile-banner-info-bottom-email'>{userData.email}</p>
                        </div>

                        <div className='profile-banner-info-bottom-item'>
                            <p className='profile-banner-info-bottom-item-label'>Role:</p>
                            <p className='profile-banner-info-bottom-role'>{userData.role}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-schedule">
                <Schedule />
            </div>

            <div className="home-actions">
                <div className='home-actions-1on1'>
                    <div className='home-actions-1on1-title'>
                        <p className='home-actions-1on1-title-text'>1-on-1s</p>
                    </div>

                    <div className='home-actions-1on1-choose'>
                    <select className="home-actions-1on1-choose-select" name="test" placeholder="Choose test">
                        {userData.users.length ? userData.users.map((user) => {
                            return <option value=""> {user}</option>
                        }) : <>There is not single user</>
                        }
                    </select>

                    <div className="home-actions-1on1-choose-button">Start</div>
                    </div>

                    

                </div>

                <div className='home-actions-feedback'>
                    <div className='home-actions-feedback-title'>
                        <p className='home-actions-feedback-title-text'>Request for feedback</p>
                    </div>

                    <div className='home-actions-feedback-choose'>
                    <select className="home-actions-feedback-choose-select" name="test" placeholder="Choose test">
                        {userData.users.length ? userData.users.map((user) => {
                            return <option value=""> {user}</option>
                        }) : <>There is not single user</>
                        }
                    </select>

                    <div className="home-actions-feedback-choose-button">Request</div>
                    </div>

                    

                </div>

            </div>

        </div>
    );
}

export default HomePage;
