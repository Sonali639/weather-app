import { SET_LOCATION } from "./Type";

const initialstate = {
    location: "Dehradun",
};

const locationreducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        default:
            return state;
    }
};

export default locationreducer;