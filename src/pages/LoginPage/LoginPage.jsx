import React, { useState } from 'react';
import { logIn } from '../../helpers/back.helper';
import './LoginPage.css';

const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const changeUserData = (event, type) => {

        if (type === 'email') {
            setUserData((currentUserData) => {
                return { ...currentUserData, email: event.target.value }
            })
        } else {
            setUserData((currentUserData) => {
                return { ...currentUserData, password: event.target.value }
            })
        }
    };

    const submitUserData = async () => {
        console.log(await logIn(userData));
    };

    return (
        <section className='login'>
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

                <button className='login-block-submit' onClick={() => {submitUserData()}}> Sign In</button>

            </div>
        </section>
    );
}

export default LoginPage;
