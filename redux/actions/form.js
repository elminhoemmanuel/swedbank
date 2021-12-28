import { } from "../types";

//action to set verification method
export const setMethod = (method) => (dispatch) => {

    dispatch({ 
        type: SET_METHOD,
        payload:method
    })

}
