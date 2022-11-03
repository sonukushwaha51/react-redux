import {  MyReducer } from "./reducers";
import {configureStore} from '@reduxjs/toolkit';
import { initialState } from "./state/MyState";

function ConfigureStore() {
    
    const store = configureStore(
        {
            reducer : MyReducer
        },initialState
    )
    return store;
}

export default ConfigureStore;