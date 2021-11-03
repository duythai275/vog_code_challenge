import {
    FETCH_ALL_POSTS,
    ADD_A_POST,
    EDIT_A_POST,
    DELETE_A_POST,
    CHANGE_OPEN_EDITOR
} from "../actions/post/type";

const initState = {
    posts: [],
    openEditor: null
};

export default function ( state = initState, action ) {
    switch ( action.type ) {
        case FETCH_ALL_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case ADD_A_POST: {
            return {
                ...state,
                posts: [ ...state.posts, action.payload ]
            }
        }
        case EDIT_A_POST: {
            return {
                ...state,
                posts: state.posts.map( post => post.id === action.payload.id ? action.payload : post )
            }
        }
        case DELETE_A_POST: {
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== action.payload.id )
            }
        }
        case CHANGE_OPEN_EDITOR: {
            return {
                ...state,
                openEditor: action.payload
            }
        }
        default: 
            return state;
    }
}