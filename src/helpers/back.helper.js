// import axios from 'axios';
const axios = require('axios').default;

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
const uri = 'https://215b-46-53-244-171.eu.ngrok.io';

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

const getUsers = async () => {
    const response = await axios({
        url: `${uri}/users`,
        method: 'GET',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true
    })

    return response.data
}

const getUser = async (userId) => {
    const response = await axios({
        url: `${uri}/users/${userId}`,
        method: 'GET',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true
    })

    return response.data
}

const getFeedback = async () => {
    const response = await axios({
        url: `${uri}/feedbacks`,
        method: 'GET',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true
    })

    return response.data
}

const postFeedback = async () => {
    const response = await axios({
        url: `${uri}/feedbacks`,
        method: 'POST',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true
    })

    // userFromId, userToId, feedback: string

    return response.data
}

const postTaskResult = async () => {
    const response = await axios({
        url: `${uri}/tasksResults`,
        method: 'POST',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true
    })

    // userId, taskId, answers: json

    return response.data
}

const getTask = async () => {
    const response = await axios({
        url: `${uri}/tasks`,
        method: 'GET',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true
    })

    // userId, taskId

    return response.data
}

const editTest = async (testId) => {
    const response = await axios({
        url: `${uri}/tests/${testId}`,
        method: 'PUT',
        mode: 'no-cors',
        headers: headers,
        withCredentials: true
    })

    return response.data
}



export { getAllTasks, createTest, logIn, getTests, register, getUsers, getUser}