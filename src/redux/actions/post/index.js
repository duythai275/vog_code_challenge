import { pull, push, del } from "../../../utils";
import {
    FETCH_ALL_POSTS,
    ADD_A_POST,
    EDIT_A_POST,
    DELETE_A_POST,
    CHANGE_OPEN_EDITOR
} from "./type";

export const getAllPosts = posts => ({
    type: FETCH_ALL_POSTS,
    payload: posts
})

export const addPost = post => ({
    type: ADD_A_POST,
    payload: post
})

export const editPost = post => ({
    type: EDIT_A_POST,
    payload: post
})

export const deletePost = post => ({
    type: DELETE_A_POST,
    payload: post
})

export const changeOpenEditor = open => ({
    type: CHANGE_OPEN_EDITOR,
    payload: open
})

export const fetchAllPostsAsync = id => {
    return dispatch => {
        pull(`https://jsonplaceholder.typicode.com/posts${ !id ? "?%20_start=0&_limit=20" : `/${id}` }`)
        .then( res => res.json() )
        .then( data => {
            dispatch(getAllPosts(!id ? data : [data]));
        })
    }
}

export const pushAPostAsync = post => {
    return dispatch => {
        push("https://jsonplaceholder.typicode.com/posts", "POST", post)
        .then( res => {
            if ( res.status === 201 ) {
                dispatch(addPost(post))
            }
        })
    }
}

export const putAPostAsync = post => {
    return dispatch => {
        push(`https://jsonplaceholder.typicode.com/posts/${post.id}`, "PUT", post)
        .then( res => {
            if ( res.status === 200 ) {
                dispatch(editPost(post))
            }
        })
    }
}

export const deleteAPostAsync = id => {
    return dispatch => {
        del(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if ( res.status === 200 ) {
                dispatch(deletePost(id))
            }
        })
    }
}