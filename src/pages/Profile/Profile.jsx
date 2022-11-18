import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import './Profile.css';
import userImg from '../../assets/images/user.jpg';
import user2Img from '../../assets/images/user2.jpg';
import gearIcon from '../../assets/images/gear.png';
import News from '../../components/News/News';
import { Link } from 'react-router-dom';

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
    ]
};

const Profile = ({ isCurrentUserOwner }) => {
    const [userData, setUserData] = useState(userMock);
    const [diagram, setDiagram] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            }
        },
        series: [
            {
                name: "2022",
                data: [4, 3, 3.5, 4, 5, 4.5, 4, 4, 3.5, 3.5, 4.5, 5]
            }
        ]
    })

    return (
        <section className='profile'>
            <div className="profile-container">
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
                                <Link to='/profile/edit/'><img className='profile-banner-info-about-top-right-icon' src={gearIcon} /> </Link>
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
                <div className="profile-statistic">
                    <div className='profile-statistic-body'>
                        {diagram !== {} ? <Chart
                            options={diagram.options}
                            series={diagram.series}
                            type="line"
                            width='100%'
                            height='100%'
                        /> : <>Loading</>}
                    </div>
                </div>

                <div className="profile-history">
                    <News />
                </div>
            </div>
        </section>
    );
}

export default Profile;
