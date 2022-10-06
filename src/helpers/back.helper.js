// import axios from 'axios';
const axios = require('axios').default

const uri = 'https://53eb-193-16-224-9.eu.ngrok.io';

const getAllTasks = async () => {
    const response = await axios({
        url: `${uri}/tasks`,
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data
}

const getTests = async (authorId) => {
    const response = await axios({
        url: authorId ? `${uri}/tests/${authorId}` : `${uri}/tests`,
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data
}

const createTest = async (test) => {
    const response = await axios({
        url: `${uri}/tests`,
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(test)
    })


    return response.data

}

const logIn = async (userData) => {
    const response = await axios({
        url: `${uri}/login`,
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
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
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: JSON.stringify(userData)
    })


    return response.data
}

export { getAllTasks, createTest, logIn, getTests, register}