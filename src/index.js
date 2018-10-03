import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import RoutedApp from './RoutedApp/RoutedApp';
import {Provider} from 'react-redux';
import todoReducer from './store/reducers/todoReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(todoReducer);

const app = (
    <Provider store={store}>
        <RoutedApp />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
