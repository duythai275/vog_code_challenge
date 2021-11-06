import { pull } from "../../../utils";
import {
    FETCH_ALL_COUNTRY_NAME,
    FETCH_UNIVERSITIES
} from "./type";

export const getUniversities = universities => ({
    type: FETCH_UNIVERSITIES,
    payload: universities
});

export const getCountryNames = countryNames => ({
    type: FETCH_ALL_COUNTRY_NAME,
    payload: countryNames
});

export const fetchUniversitiesAsync = country => {
    return dispatch => {
        pull(`http://universities.hipolabs.com/search?country=${country}`)
        .then( res => res.json() )
        .then( data => {
            dispatch(getUniversities(data));
        })
    }
} 

export const fetchCountryNamesAsync = () => {
    return dispatch => {
        pull(`https://restcountries.com/v3.1/all`)
        .then( res => res.json() )
        .then( data => {
            dispatch(getCountryNames(data.map(({name}) => name.common)));
        })
    }
} 