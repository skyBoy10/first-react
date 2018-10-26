import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducer/rootReducer';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));