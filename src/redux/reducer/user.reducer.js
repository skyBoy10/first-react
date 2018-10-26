import * as  ActionTypes from '../constants/actionTypes';

const user = (state, action) => {
    switch(action.type)
    {
        case ActionTypes.REQUEST:
            return {
                isFetch: true
            };
        case ActionTypes.RECEIVE:
            return {
                isFetch: false,
                username: action.payload.username,
                isAdmin: action.payload.isAdmin
            };
        case ActionTypes.USER_LOGIN:
            return {
                isFetch: true,
                isAdmin: true
            }
        case ActionTypes.SIGN_OUT:
            return {
                isAdmin: false
            }
        default:
            if(!state)
            {
                return {
                    isFetch: false,
                    isAdmin: false
                }
            }
            
            return state;
    }
};

export default user;