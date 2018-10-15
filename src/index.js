import css from './index.css'; 
import React from 'react';
import { render } from 'react-dom';
import App from './js/components/App';
import store from './js/redux/store';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);