import * as ActionTypes from '../constants/actionTypes';
import axios from 'axios';
import history from '../../history';

const requestAction = () => {
    return {
        type: ActionTypes.REQUEST
    }
};

const receiveAction = (info) => {
    return {
        type: ActionTypes.RECEIVE,
        payload: info
    }
};

const singOut = () => {
    return {
        type: ActionTypes.SIGN_OUT
    };
}

export const loginAction = (info) => async dispatch => {
    dispatch(requestAction());
    let result = await axios.post('/login', info);

    if(result.data.errcode == '0')
    {
        dispatch(receiveAction(result.data.data));
    }
};

export const signOutAction = () => async dispatch => {
    dispatch(singOut());
    history.push('/login');
}