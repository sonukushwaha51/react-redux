import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { combineReducer} from './reducers';


function ConfigureStore() {
    const store = configureStore({reducer : combineReducer}, applyMiddleware(thunk));
    return store;
}
export default ConfigureStore;