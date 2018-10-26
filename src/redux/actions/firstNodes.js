import * as ActionTypes from '../constants/actionTypes';
import fetch from '../../fetch/index';

const action = (result) => {
    return {
        type: ActionTypes.GET_FIRST_NODES,
        payload: result
    }
}

const loadingAction = () => {
    return {
        type: ActionTypes.IS_LOADING
    };
};

const firstNodes = (type, nodeInfo) => async dispatch => {
    dispatch(loadingAction());
    let data = await fetch.mockHttp(type, nodeInfo);
    dispatch(action({data: data, nodeInfo: nodeInfo}));
};

export default firstNodes;