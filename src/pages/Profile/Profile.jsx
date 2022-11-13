import React, { useState, useEffect } from 'react';
import './Profile.css';
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
};

const Profile = ({ isCurrentUserOwner }) => {
    const [userData, setUserData] = useState(userMock);

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
            </div>
        </section>
    );
}

export default Profile;
