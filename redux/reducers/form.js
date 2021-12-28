import { INCR_STEP, DECR_STEP, RESET, SET_INCOME, SET_AMOUNT } from "../types"

const initialState = {
    step: 0,
    income:0,
    amount:0,

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
        default:
            return state;
    }
};