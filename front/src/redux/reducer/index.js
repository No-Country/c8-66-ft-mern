const initialState = {
    user: [],
}

function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_USER_MAIL:
        return {
            ...state,
            user: action.payload,
        };
    }
}

export default rootReducer