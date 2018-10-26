import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducer/rootReducer';
import thunk from 'redux-thunk';

const initState = {
    isAdmin: false,
    nodes: []
}

export const store = createStore(rootReducer, initState, compose(applyMiddleware(thunk)));