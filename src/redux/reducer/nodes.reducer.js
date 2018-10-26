import * as  ActionTypes from '../constants/actionTypes';

const nodes = (state, action) => {
    switch(action.type)
    {
        case ActionTypes.GET_FIRST_NODES:
            return {
                ...state,
                nodes: action.payload.data,
                isLoaded: true
            };
        case ActionTypes.GET_CHILD_NODES:
            for(var i = 0; i < state.nodes.length; i++)
            {
                if(state.nodes[i].key == action.payload.nodeInfo.key)
                {
                    let preData = state.nodes.slice();
                    preData[i].children = action.payload.data;

                    return {
                        ...state,
                        currentFirstNode: action.payload.nodeInfo.title,
                        nodes: preData
                    }
                }
            }
        case ActionTypes.IS_LOADING:
            return {
                ...state,
                isLoaded: false
            };
        case ActionTypes.IS_LOADED:
            return {
                ...state,
                isLoaded: true
            };
        default:
            if(!state)
            {
                return {
                    isLoaded: false,
                    nodes: []
                }
            }

            return state;
    }
};

export default nodes;