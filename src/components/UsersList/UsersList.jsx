import React, { useState } from 'react';
import './UsersList.css';
import userImg from '../../assets/images/user.jpg';
import user2Img from '../../assets/images/user2.jpg';

const UsersList = () => {

    const [users, setUsers] = useState(() => {
        return [{
            name: 'Vitaly Zhuk',
            position: 'System administrator',

        },
        {
            name: 'Vladislav Leonchik',
            position: 'Front-end developer',
        }
        ]
    });

    return (
        <div className='usersList'>
            {users ? users.map((user) => {
                return <div className='usersList-item'>
                    <img className='usersList-item-image' src={userImg} alt="" />

                    <div className="usersList-item-info">
                        <p className='usersList-item-name'>{user.name}</p>
                        <p className='usersList-item-position'>{user.position}</p>
                    </div>
                </div>
            }) : <></>}
        </div>
    )
}

export default UsersList;