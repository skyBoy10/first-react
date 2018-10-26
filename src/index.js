import React from 'react';
import ReactDom from 'react-dom';
import App from './page/App';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store'
import history from './history';
import './mock/mock';

import './css/common.less'

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);