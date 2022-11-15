import { combineReducers } from "redux";
import actionTypes from "./actions/actionTypes";
import { comm, initialState , stock, result, loadedComments} from "./state/MyState";

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
export const arithmeticReducer = (state = result,action) => {
    switch(action.type) {
        case actionTypes.addition:
            return {
                value : action.payload.number1 + action.payload.number2
            }
        case actionTypes.substraction:
            return {
                value : action.payload.number1 - action.payload.number2,
            }
        case actionTypes.multiplication:
            return {
                value : action.payload.number1 * action.payload.number2
            }
        case actionTypes.division:
            return {
                value : action.payload.number1 / action.payload.number2
            }
        case actionTypes.modulus:
        return {
            value : action.payload.number1 % action.payload.number2
        }
        default:
            return state
    }
}

export const loadCommentReducer = (state = loadedComments,action) => {
    if(action.type === actionTypes.loadComment) {
        return {
            loadcomments: action.payload
        }
    }
    else {
        return state
    }
}

export const combineReducer = combineReducers({
    timerReducer : MyReducer,
    bookReducer : bookReducer,
    commentReducer: addCommentReducer,
    arithMetic : arithmeticReducer,
    loadComment: loadCommentReducer
})
