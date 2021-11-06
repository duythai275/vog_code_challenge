import {
    LOOKUP_POSTAL
} from "../actions/postalLookup/type";

const initState = {
    area: null
};

export default function ( state = initState, action ) {
    switch ( action.type ) {
        case LOOKUP_POSTAL: {
            return {
                area: action.payload
            }
        }
        default: 
            return state;
    }
}