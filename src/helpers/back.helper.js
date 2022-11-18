// import axios from 'axios';
const axios = require('axios').default;

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
const uri = 'https://16c6-193-16-224-10.eu.ngrok.io';

const headers = {
    'Content-Type': 'application/json',
    authorization: getCookie('token')
}

const getAllTasks = async () => {
    const response = await axios({
        url: `${uri}/tasks`,
        method: 'GET',
        mode: 'no-cors',
        headers: headers
    })

    return response.data
}

const getTests = async () => {
    const response = await axios({
        url: `${uri}/tests`,
        method: 'GET',
        mode: 'no-cors',
        headers: headers
    })


    return response.data
} 

const getUserTests = async (authorId) => {
    const response = await axios({
        url: authorId ? `${uri}/tests/${authorId}` : `${uri}/tests`,
        method: 'GET',
        mode: 'no-cors',
        headers: headers
    })


    return response.data
}


const createTest = async (test) => {
    const response = await axios({
        url: `${uri}/tests`,
        method: 'POST',
        mode: 'no-cors',
        headers: headers,
        data: JSON.stringify(test)
    })


    return response.data

}

const logIn = async (userData) => {
    const response = await axios({
        url: `${uri}/login`,
        method: 'POST',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true,
        data: JSON.stringify(userData)
    })


    return response.data
}

const register = async (userData) => {
    const response = await axios({
        url: `${uri}/register`,
        method: 'POST',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true,
        data: JSON.stringify(userData)
    })


    return response.data
}

export { getAllTasks, createTest, logIn, getTests, register}