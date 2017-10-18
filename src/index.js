import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './styles/index.css';
import App from './components/app';
import allReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

ReactDOM.render(
                <Provider store = {store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
