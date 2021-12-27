import { INCR_STEP, DECR_STEP, RESET, SET_INCOME, SET_AMOUNT, SET_DURATION,SET_NAME } from "../types"

const initialState = {
    step: 0,
    income:0,
    amount:0,
    duration:"3",
    name:""

};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {

        case INCR_STEP:
            return {
                ...state,
                step: state.step + 1
            };
        case DECR_STEP:
            return {
                ...state,
                step: state.step - 1
            };
        case RESET:
            return {
                ...state,
                step: 0
            };
        case SET_INCOME:
            return {
                ...state,
                income:action.payload,
            };
        case SET_AMOUNT:
            return {
                ...state,
                amount:action.payload,
            };
        case SET_DURATION:
            return {
                ...state,
                duration:action.payload,
            };
        case SET_NAME:
            return {
                ...state,
                name:action.payload,
            };
        default:
            return state;
    }
};