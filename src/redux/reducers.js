import { combineReducers } from "redux";
import actionTypes from "./actions/actionTypes";
import { comm, initialState , stock} from "./state/MyState";

export const MyReducer = (state = initialState, action) => {

    if(action.type === actionTypes.incrementTimer) {
        
        return {
            ...state,
            timer: state.timer + 1
        }
    } else if(action.type === actionTypes.decrementTimer) {
        return {
            ...state,
            timer: state.timer - 1
        }
    } else {
        return state
    }
    
}
export const bookReducer = (state = stock,action) => {
    switch(action.type) {
        case actionTypes.addStock: 
            return {
                ...state,
                value : state.value + +action.payload
            }
        case actionTypes.removeStock: 
        
            return {
                ...state,
                value : state.value - +action.payload
            }
        default:
            return state

    }
}
export const addCommentReducer = (state = comm, action) => {
    switch(action.type) {
        case actionTypes.addComment:
            return {
                comments : [...state.comments, action.payload]
                
            }
        default:
            return state;
    }
}

export const combineReducer = combineReducers({
    timerReducer : MyReducer,
    bookReducer : bookReducer,
    commentReducer: addCommentReducer
})
