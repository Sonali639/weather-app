import locationreducer from "./Location/Reducer";
import btnReducer from "./ButtonC&F/Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    location: locationreducer,
    temp: btnReducer,
});

export default rootReducer;