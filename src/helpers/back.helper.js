const uri = 'http://localhost:3001';

const getAllTasks = async () => {
    const response = await fetch(`${uri}/tasks`, {
        method: 'GET',
        mode: 'no-cors'
    });

    const data = await response.json();

    return data
}

const createTest = async (test) => {
    await fetch(`${uri}/tests`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(test)
    });
}

export {getAllTasks, createTest}