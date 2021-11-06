import {
    FETCH_ALL_COUNTRY_NAME,
    FETCH_UNIVERSITIES
} from "../actions/university/type";

const initState = { 
    universities: [],
    countryNames: []
}

export default function ( state = initState , action ) {
    switch ( action.type ) {
        case FETCH_UNIVERSITIES: {
            return {
                ...state,
                universities: action.payload
            }
        }
        case FETCH_ALL_COUNTRY_NAME: {
            return {
                ...state,
                countryNames: action.payload
            }
        }
        default:
            return state;
    }
}