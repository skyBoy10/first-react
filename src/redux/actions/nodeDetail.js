import * as ActionTypes from '../constants/actionTypes';
import axios from 'axios';

const action = (result) => {
    return {
        type: ActionTypes.GET_DETAIL,
        payload: result
    }
}

const loadingAction = () => {
    return {
        type: ActionTypes.LOADING_DETAIL
    };
};

const clearData = () => {
    return {
        type: ActionTypes.CLEAR_DETAIL
    };
}

export const detailAction = (type, nodeInfo) => async dispatch => {
    dispatch(loadingAction());
    let data = await axios.post('/business/list', {params: nodeInfo});
    if(data.data.errcode == '0')
    {
        dispatch(action({data: data.data.data, info: nodeInfo}));
    }
};

export const clearAction = () => async dispatch => {
    dispatch(clearData());
};