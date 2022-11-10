import {configureStore} from '@reduxjs/toolkit';
import { combineReducer} from './reducers';


function ConfigureStore() {
    const store = configureStore({reducer : combineReducer});
    return store;
}
export default ConfigureStore;