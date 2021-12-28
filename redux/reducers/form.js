import { INCR_STEP, DECR_STEP, RESET } from "../types"

const initialState = {
    step: 3,
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
        default:
            return state;
    }
};