import { cbutton,fbutton } from "./Action";
import { C,F } from "./Type";

const initialState = {
    temp: true,
};

const btnReducer = (state = initialState, action) => {
    switch (action.type) {
        case C:
            return {
                ...state,
                temp: true,
            };
        case F:
            return {
                ...state,
                temp: false,
            };
        default:
            return state;
    }
}

export default btnReducer;