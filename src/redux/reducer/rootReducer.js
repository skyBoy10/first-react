import { combineReducers } from 'redux';
import login from './user.reducer';
import nodes from './nodes.reducer';
import detail from './business.detail.reducer';

export const rootReducer = combineReducers({login, nodes, detail});