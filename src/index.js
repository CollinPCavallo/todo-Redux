import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, compose, applyMiddleware, combineReducers} from 'redux';
import RoutedApp from './RoutedApp/RoutedApp';
import {Provider} from 'react-redux';
import todoReducer from './store/reducers/todoReducer';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import { watcherSaga } from './store/saga';
import errorReducer from './store/reducers/errorReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
                combineReducers({
                    todos: todoReducer,
                    errors: errorReducer
                }), 
                composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watcherSaga);
const app = (
    <Provider store={store}>
        <RoutedApp />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
