import React, { useState } from 'react';
import { logIn, register } from '../../helpers/back.helper';
import './LoginPage.css';

const LoginPage = ({ type }) => {
    const [userData, setUserData] = useState(() => {
        return (type === 'login') ? {
            email: '',
            password: ''
        } :
            {
                email: '',
                password: '',
                name: '',
                position: ''
            }

    });

    const changeUserData = (event, type) => {

        switch (type) {
            case 'email':
                setUserData((currentUserData) => {
                    return { ...currentUserData, email: event.target.value }
                })
            case 'password':
                setUserData((currentUserData) => {
                    return { ...currentUserData, password: event.target.value }
                })
            case 'position':
                setUserData((currentUserData) => {
                    return { ...currentUserData, position: event.target.value }
                })
            case 'name':
                setUserData((currentUserData) => {
                    return { ...currentUserData, name: event.target.value }
                })

        }
    };

    const submitUserData = async () => {
       const loginData = (type === 'login') ? await logIn(userData) : await register(userData);

       document.cookie = encodeURIComponent('token') + '=' + encodeURIComponent(loginData.token);
       localStorage.setItem('userData', JSON.stringify(loginData.user))
    };

    return (
        <section className='login'>
            {type === 'login' ?
                <div className='login-block'>
                    <h1 className="login-block-title">Sign In</h1>

                    <div className='login-block-form'>
                        <div className='login-block-form-row'>
                            <label className='login-block-form-row-label' htmlFor="">Email</label>
                            <input className='login-block-form-row-input' type="text" onChange={(event) => {
                                changeUserData(event, 'email')
                            }} />
                        </div>

                        <div className='login-block-form-row'>
                            <label className='login-block-form-row-label' htmlFor="">Password</label>
                            <input className='login-block-form-row-input' type="password" onChange={(event) => {
                                changeUserData(event, 'password')
                            }} />
                        </div>
                    </div>

                    <button className='login-block-submit' onClick={() => { submitUserData() }}> Sign In</button>

                </div> :
                <div className='login-block'>
                    <h1 className="login-block-title">Sign Up</h1>

                    <div className='login-block-form'>
                        <div className='login-block-form-row'>
                            <label className='login-block-form-row-label' htmlFor="">Email</label>
                            <input className='login-block-form-row-input' type="text" onChange={(event) => {
                                changeUserData(event, 'email')
                            }} />
                        </div>

                        <div className='login-block-form-row'>
                            <label className='login-block-form-row-label' htmlFor="">Name</label>
                            <input className='login-block-form-row-input' type="text" onChange={(event) => {
                                changeUserData(event, 'name')
                            }} />
                        </div>

                        <div className='login-block-form-row'>
                            <label className='login-block-form-row-label' htmlFor="">Position</label>
                            <input className='login-block-form-row-input' type="text" onChange={(event) => {
                                changeUserData(event, 'position')
                            }} />
                        </div>

                        <div className='login-block-form-row'>
                            <label className='login-block-form-row-label' htmlFor="">Password</label>
                            <input className='login-block-form-row-input' type="password" onChange={(event) => {
                                changeUserData(event, 'password')
                            }} />
                        </div>
                    </div>

                    <button className='login-block-submit' onClick={() => { submitUserData() }}> Sign Un</button>

                </div>}

        </section>
    );
}

export default LoginPage;
