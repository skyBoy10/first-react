import * as ActionTypes from '../constants/actionTypes';
import fetch from '../../fetch/index';

export const childAction = (result) => {
    return {
        type: ActionTypes.GET_CHILD_NODES,
        payload: result
    }
};

export const getChildNodes = (type, nodeInfo) => {
    return fetch.mockHttp(type, nodeInfo);
};

export const updateAction = (info) => {
    return {
        type: ActionTypes.SWITCH_DISABLED,
        payload: info
    };
}