import { comm } from "../state/MyState";
import actionTypes from "./actionTypes";

export const incrementTimerAction = {
    type: actionTypes.incrementTimer
    
}

export const decrementTimerAction = {
    type: actionTypes.decrementTimer
    
}
export const addInStock = (number) => {
    return {
        type: actionTypes.addStock,
        payload : number
    }
}
export const removeFromStock = (number) => {
    return {
        type: actionTypes.removeStock,
        payload : number
    }
}

export const addComments = (name,comment) => {
    return {
        type : actionTypes.addComment,
        payload : {
            id : comm.comments.length,
            names: name,
            comment: comment
        }
    }
}

