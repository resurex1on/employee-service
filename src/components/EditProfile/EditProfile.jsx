import React, { useState } from 'react';
import './EditProfile.css';
import userImg from '../../assets/images/user.jpg';
import user2Img from '../../assets/images/user2.jpg';

const userMock = {
    name: 'Vitaly Zhuk',
    position: 'System administrator',
    image: userImg,
    manager: {
        name: 'Denis Legostaev',
        image: user2Img,
        position: 'Head of Sestem administrators'
    },
    role: 'user',
    email: 'vitaly-zhuk@mail.com',
    users: ["Vlad Leonchik", "Vitaliy Zhuk", "ALina Drozd"]
};

const EditProfile = () => {
    const [userData, setUserData] = useState(userMock);

    return (
        <section className='edit-profile'>
            <div className='edit-profile-container'>
                <div className="edit-profile-row">
                    <div className="edit-profile-imageBlock edit-profile-column">
                        <img className='edit-profile-block-image' src={userImg} alt="" />
                        <div className='edit-profile-block-button'>Edit image</div>
                            
                    </div>

                    <div className="edit-profile-column">
                        <div className="edit-profile-block">
                            <label className='edit-profile-block-label' htmlFor="name">Name</label>
                            <input className='edit-profile-block-input input' type="text" name='name' />
                        </div>

                        <div className="edit-profile-block">
                            <label className='edit-profile-block-label' htmlFor="emal">Email</label>
                            <input className='edit-profile-block-input input' type="email" name='email' />
                        </div>

                        <div className="edit-profile-block">
                            <label className='edit-profile-block-label' htmlFor="Position">Position</label>
                            <input className='edit-profile-block-input input' type="text" name='Position' />
                        </div>

                        <div className="edit-profile-block">
                            <label className='edit-profile-block-label' htmlFor="manager">Manager</label>
                            <select className="home-actions-1on1-choose-select" name="manager" placeholder="Choose test">
                                {userData.users.length ? userData.users.map((user) => {
                                    return <option value=""> {user}</option>
                                }) : <>There is not single user</>
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="edit-profile-button">Submit</div>
            </div>
        </section>
    );
}

export default EditProfile;
