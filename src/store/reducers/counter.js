import * as actionTypes from "../actions/actionTypes";
import { updateObjetc } from "../utility";

const initialState = {
    counter: 20,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //The oldes aproach of inmutably update
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        //the clearest aproach of innmutabily update
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        //the sofisticated way to do it
        case actionTypes.ADD:
            return updateObjetc(state, { counter: state.counter + action.val });
        case actionTypes.SUBTRACT:
            return updateObjetc(state, { counter: state.counter - action.val });
    }
    return state;
};

export default reducer;
