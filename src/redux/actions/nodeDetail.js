import * as ActionTypes from '../constants/actionTypes';
import fetch from '../../fetch/index';

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

const firstNodes = (type, nodeInfo) => async dispatch => {
    dispatch(loadingAction());
    let data = await fetch.mockHttp(type, nodeInfo);
    dispatch(action({data: data, info: nodeInfo}));
};

export default firstNodes;