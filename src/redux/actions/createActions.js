import { comm } from "../state/MyState";
import actionTypes from "./actionTypes";
import axios from "axios";

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

export const addAction = (number1, number2) => {
    
    return {
        type: actionTypes.addition,
        payload : {
            number1: +number1,
            number2: +number2
        }
    }
}
export const subAction = (number1, number2) => {
    return {
        type: actionTypes.substraction,
        payload : {
            number1: +number1,
            number2: +number2
        }
    }
}

export const mulAction = (number1, number2) => {
    return {
        type: actionTypes.multiplication,
        payload : {
            number1: +number1,
            number2: +number2
        }
    }
}

export const divAction = (number1, number2) => {
    return {
        type: actionTypes.division,
        payload : {
            number1: +number1,
            number2: +number2
        }
    }
}

export const modAction = (number1, number2) => {
    return {
        type: actionTypes.modulus,
        payload : {
            number1: +number1,
            number2: +number2
        }
    }
}

export const loadComments = (posts) => {
    return {
        type: actionTypes.loadComment,
        payload: posts
    }
}
export const fetchComments = () => {
    return function(dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((comments) =>{
            const posts = comments.data
            dispatch(loadComments(posts))
        }).catch(err => {
            return {
                errors : err.message
            }
        })
    }
}

