import actionTypes from "./actionTypes";
import { initialState } from "../state/MyState";

export const incrementTimerAction = {
    type: actionTypes.incrementTimer,
    payload : {
        timer : initialState.timer
    }
}

export const decrementTimerAction = {
    type: actionTypes.decrementTimer,
    payload: {
        timer : initialState.timer
    }
}

