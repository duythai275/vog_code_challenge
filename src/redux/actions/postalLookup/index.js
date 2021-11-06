import { pull } from "../../../utils";
import {
    LOOKUP_POSTAL
} from "./type";

export const getPostalArea = data => ({
    type: LOOKUP_POSTAL,
    payload: data
})

export const fetchPostalAreAsync = code => {
    return dispatch => {
        pull(`https://api.zippopotam.us/us/${code}`)
        .then( res => res.json() )
        .then( data => {
            dispatch(getPostalArea(data))
        })
    }
}