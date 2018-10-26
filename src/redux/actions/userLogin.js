import * as ActionTypes from '../constants/actionTypes';
import fetch from '../../fetch/index';

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

const userLogin = (info) => async dispatch => {
    dispatch(requestAction());
    let result = await fetch.mockHttp(1, info);
    dispatch(receiveAction(result));
};

export default userLogin;