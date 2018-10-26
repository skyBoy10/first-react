import * as ActionTypes from '../constants/actionTypes';
import fetch from '../../fetch/index';

export const openAction = () => {
    return {
        type: ActionTypes.OPEN_CONFIG_MODAL
    }
};

export const closeAction = () => {
    return {
        type: ActionTypes.CLOSE_CONFIG_MODAL
    }
};