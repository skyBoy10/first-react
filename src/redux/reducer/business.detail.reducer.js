import * as  ActionTypes from '../constants/actionTypes';

const reducer = (state, action) => {
    switch(action.type)
    {
        case ActionTypes.GET_DETAIL:
            return {
                ...state,
                data: action.payload.data,
                currentSecNode: action.payload.info.title,
                isLoadingDetail: false
            };
        case ActionTypes.LOADING_DETAIL:
            return {
                ...state,
                isLoadingDetail: true
            };
        case ActionTypes.OPEN_CONFIG_MODAL:
            return {
                ...state,
                isOpenConfigModal: true
            };
        case ActionTypes.CLOSE_CONFIG_MODAL:
            return {
                ...state,
                isOpenConfigModal: false
            }
        case ActionTypes.SWITCH_DISABLED:
            return {
                ...state,
                isDisabled: action.payload.isDisabled
            };
        default:
            if(!state) {
                return {
                    isOpenConfigModal: false,
                    isDisabled: true,
                    data: []
                }
            }

            return state;
    }
};

export default reducer;