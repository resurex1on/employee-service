const initialState = {
    show: "false",
    text: '',
    type: 'Success'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MESSAGE__SUCCESS":
            return {
                show: true,
                text: action.text,
                type: 'Success'
            };
        case "MESSAGE":
            return {
                show: true,
                text: action.text,
                type: 'MESSAGE'
            };
        case "MESSAGE__ERROR":
            return {
                show: true,
                text: action.text,
                type: 'Error'
            };
        case "MESSAGE__CLOSE":
            return {
                show: false,
                ...state
            };
        default:
            return state;
    }
};

export default reducer