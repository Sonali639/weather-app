import { SET_LOCATION } from "./Type";

const setlocation=(location)=>{
    return{
        type:SET_LOCATION,
        payload:location,
    };
}

export default setlocation;