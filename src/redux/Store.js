import { initialState, MyReducer } from "./reducers";
import {configureStore} from '@reduxjs/toolkit';

function ConfigureStore() {
    
    const store = configureStore(
        MyReducer,initialState
    )
    return store;
}

export default ConfigureStore;