import actionTypes from "./actions/actionTypes";
import { initialState } from "./state/MyState";

export const MyReducer = (state = initialState, action) => {
    // switch(action.type) {
    //     case actionTypes.incrementTimer: {
    //         return state + action.payload;
    //     }
    //     case actionTypes.decrementTimer: {
    //         return state - action.payload;
    //     }
    //     default:
    //         return state;
    // }
    if(action.type === actionTypes.incrementTimer) {
        
        return state.timer + 1
    } else if(action.type === actionTypes.decrementTimer) {
        return state.timer - 1
    } else {
        return state
    }
    
}

